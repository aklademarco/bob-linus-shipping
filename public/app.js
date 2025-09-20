// Minimal client that mirrors Bob-Linus/admin app.js behavior
(function(){
  const { url, anonKey } = window.SUPABASE_CONFIG || {};
  const supabase = window.supabase.createClient(url, anonKey);
  const authEl = document.getElementById('auth');
  const appEl = document.getElementById('app');

  function rowHtml(s, idx) {
    return `
      <tr data-idx="${idx}">
        <td>${s.shipment_id}</td>
        <td><input class="inline-status input" value="${s.status || ''}" /></td>
        <td><input class="inline-location input" value="${s.current_location || ''}" /></td>
        <td class="muted">${s.updated_at}</td>
        <td class="right"><button class="save-btn btn btn-primary">Save</button></td>
      </tr>`;
  }

  async function fetchShipments(q) {
    let req = supabase.from('shipments').select('*').order('updated_at', { ascending: false }).limit(100);
    if (q && q.trim()) req = req.ilike('shipment_id', `%${q.trim()}%`);
    return await req;
  }

  function renderAuth(errorMsg) {
    authEl.classList.remove('hidden');
    appEl.classList.add('hidden');
    authEl.innerHTML = `
      <div class="card" style="max-width:480px;margin:0 auto;">
        <h1 class="title text-center">Admin Login</h1>
        ${errorMsg ? `<div class="muted" style="color:#b91c1c">${errorMsg}</div>` : ''}
        <div class="spacer-16"></div>
        <form id="login-form" class="grid">
          <input id="email" type="email" placeholder="Email" class="input" required />
          <input id="password" type="password" placeholder="Password" class="input" required />
          <button id="login-btn" class="btn btn-primary" style="width:100%">Sign in</button>
        </form>
      </div>`;

    document.getElementById('login-form').addEventListener('submit', async function (e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) return renderAuth(error.message);
      renderApp();
    });
  }

  function renderApp(message, error) {
    authEl.classList.add('hidden');
    appEl.classList.remove('hidden');
    appEl.innerHTML = `
      <div class="card">
        <div class="row row-wrap">
          <h2 class="title" style="margin:0">Shipments Admin</h2>
          <div class="toolbar"><button id="logout" class="btn">Sign out</button></div>
        </div>
        <div class="spacer-16"></div>
        <form id="create-form" class="grid grid-4">
          <div>
            <label class="label">Shipment ID</label>
            <input id="create-id" class="input" placeholder="e.g. SHIP-1234" required />
          </div>
          <div>
            <label class="label">Status</label>
            <input id="create-status" class="input" value="Pending at warehouse" />
          </div>
          <div>
            <label class="label">Location</label>
            <input id="create-location" class="input" placeholder="Dock A" />
          </div>
          <div style="align-self:end"><button class="btn btn-primary" style="width:100%">Add Shipment</button></div>
        </form>
        <div class="spacer-16"></div>
        <div class="row row-wrap">
          <div class="toolbar" style="flex:1">
            <input id="search" class="input" placeholder="Search shipment_id..." style="flex:1" />
            <button id="search-btn" class="btn btn-dark">Search</button>
          </div>
          <div><button id="refresh" class="btn btn-link">Clear & Refresh</button></div>
        </div>
        <div class="spacer-16"></div>
        <div class="table-wrap">
          <table>
            <thead><tr>
              <th>Shipment ID</th>
              <th>Status</th>
              <th>Location</th>
              <th>Updated At</th>
              <th></th>
            </tr></thead>
            <tbody id="table-body"></tbody>
          </table>
        </div>
        ${(message || error) ? `<div>${message ? `<div class='muted' style='color:#065f46'>${message}</div>` : ''}${error ? `<div class='muted' style='color:#b91c1c'>${error}</div>` : ''}</div>` : ''}
      </div>`;

    document.getElementById('logout').onclick = async function () {
      await supabase.auth.signOut();
      appEl.classList.add('hidden');
      authEl.classList.remove('hidden');
      renderAuth('');
    };

    document.getElementById('create-form').onsubmit = async function (e) {
      e.preventDefault();
      const id = document.getElementById('create-id').value.trim();
      const status = document.getElementById('create-status').value.trim();
      const location = document.getElementById('create-location').value.trim();
      const { data, error } = await supabase.from('shipments').insert({ shipment_id: id, status: status || null, current_location: location || null }).select().maybeSingle();
      if (error) return renderApp('', error.message);
      renderApp('Shipment ' + data.shipment_id + ' created');
      loadRows('');
    };

    document.getElementById('search-btn').onclick = async function (e) {
      e.preventDefault();
      const q = document.getElementById('search').value;
      loadRows(q);
    };
    document.getElementById('refresh').onclick = function (e) {
      e.preventDefault();
      document.getElementById('search').value = '';
      loadRows('');
    };

    if (!window.shipmentsChannel) {
      window.shipmentsChannel = supabase
        .channel('shipments-all')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'shipments' }, function () {
          const q = document.getElementById('search').value;
          loadRows(q);
        })
        .subscribe();
    }

    loadRows('');
  }

  async function loadRows(q) {
    const tbody = document.getElementById('table-body');
    if (!tbody) return;
    tbody.innerHTML = `<tr><td colspan="5" class="muted" style="text-align:center;padding:16px">Loading...</td></tr>`;
    const { data, error } = await fetchShipments(q || '');
    if (error) {
      tbody.innerHTML = `<tr><td colspan="5" class="muted" style="color:#b91c1c;text-align:center;padding:16px">${error.message}</td></tr>`;
      return;
    }
    const rows = (data || []).map(rowHtml).join('');
    tbody.innerHTML = rows || `<tr><td colspan="5" class="muted" style="text-align:center;padding:16px">No shipments found</td></tr>`;

    Array.from(tbody.querySelectorAll('.save-btn')).forEach(function (btn) {
      btn.addEventListener('click', async function (e) {
        e.preventDefault();
        const tr = e.target.closest('tr');
        const idCell = tr.children[0].textContent;
        const status = tr.querySelector('.inline-status').value;
        const location = tr.querySelector('.inline-location').value;
        const updates = { status: status, current_location: location, updated_at: new Date().toISOString() };
        const { data, error } = await supabase.from('shipments').update(updates).eq('shipment_id', idCell).select().maybeSingle();
        if (error) return renderApp('', error.message);
        renderApp('Shipment ' + data.shipment_id + ' updated');
        loadRows(document.getElementById('search').value);
      });
    });
  }

  (async function bootstrap() {
    const { data } = await supabase.auth.getSession();
    if (data && data.session) {
      renderApp();
    } else {
      renderAuth('');
    }
  })();
})();
