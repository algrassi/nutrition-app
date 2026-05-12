// ============================================
// SECURING APP WITH LOGIN/REGISTER FLOW
// ============================================
import { supabase } from './lib/supabase.js'

const { data: { session } } = await supabase.auth.getSession()
if (!session) window.location.href = '/auth/login.html'

// ============================================
// APP LOGIC
// ============================================

const state = {
  currentView: 'plan',
  currentDay: getTodayId(),
};

function getTodayId() {
  // 1=Lun ... 7=Dom
  const dow = new Date().getDay();
  const map = { 0: 'dom', 1: 'lun', 2: 'mar', 3: 'mer', 4: 'gio', 5: 'ven', 6: 'sab' };
  return map[dow];
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// ====== DAY SELECTOR ======
function renderDaySelector() {
  const el = document.getElementById('daySelector');
  const todayId = getTodayId();
  const dayDisc = { lun: 'RUN', mar: 'SWIM', mer: 'BIKE', gio: 'SWIM', ven: 'B+R', sab: 'LONG', dom: 'OFF' };
  el.innerHTML = DAYS.map(d => {
    const active = d.id === state.currentDay ? 'active' : '';
    const today = d.id === todayId ? 'today' : '';
    const loadLabel = d.load;
    const disc = dayDisc[d.id] || '·';
    return `
      <div class="day-pill ${active} ${today}" data-day="${d.id}">
        <div class="dow">${d.short}</div>
        <div class="dnum">${disc}</div>
        <div class="dload">${loadLabel}</div>
      </div>
    `;
  }).join('');

  el.querySelectorAll('.day-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      state.currentDay = pill.dataset.day;
      renderDaySelector();
      renderDayContent();
      // smooth scroll up
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// ====== DAY CONTENT ======
function renderDayContent() {
  const d = DAYS.find(x => x.id === state.currentDay);
  if (!d) return;
  const el = document.getElementById('dayContent');

  const isRest = d.workout.type === 'rest';
  const wkClass = isRest ? 'workout-card rest' : 'workout-card';

  el.innerHTML = `
    <div class="day-header">
      <div class="day-title">
        <h1>${d.name}</h1>
        <div class="day-num">/ ${d.load}</div>
      </div>
      <div class="${wkClass}">
        <div class="workout-label">${escapeHtml(d.workout.label)}</div>
        <div class="workout-title">${escapeHtml(d.workout.title)}</div>
        <div class="workout-meta">
          <div><strong>${escapeHtml(d.workout.duration)}</strong></div>
          <div><strong>${escapeHtml(d.workout.tss)}</strong></div>
        </div>
        <div class="workout-meta" style="margin-top:6px;">
          <div>${escapeHtml(d.workout.time)}</div>
        </div>
      </div>
    </div>

    <div class="macro-summary">
      <div class="macro-item">
        <div class="macro-label">Kcal</div>
        <div class="macro-value">${d.macros.kcal.toLocaleString('it')}</div>
      </div>
      <div class="macro-item">
        <div class="macro-label">Prot.</div>
        <div class="macro-value">${d.macros.p}<span class="unit">g</span></div>
      </div>
      <div class="macro-item">
        <div class="macro-label">CHO</div>
        <div class="macro-value">${d.macros.c}<span class="unit">g</span></div>
      </div>
      <div class="macro-item">
        <div class="macro-label">Grassi</div>
        <div class="macro-value">${d.macros.f}<span class="unit">g</span></div>
      </div>
    </div>

    <div class="meals">
      ${d.meals.map((m, i) => renderMeal(m, i)).join('')}
    </div>
  `;

  // Bind toggle
  el.querySelectorAll('.meal').forEach(meal => {
    meal.querySelector('.meal-header').addEventListener('click', () => {
      meal.classList.toggle('expanded');
    });
  });
}

function renderMeal(m, i) {
  const wk = m.workoutMeal ? 'workout-meal' : '';
  const noteHtml = m.note ? `
    <div class="note">
      <strong>${escapeHtml(m.note.tag)}</strong>
      ${m.note.text}
    </div>
  ` : '';
  return `
    <div class="meal ${wk}" data-idx="${i}">
      <div class="meal-header">
        <div class="meal-time">${m.time}</div>
        <div class="meal-info">
          <div class="meal-name">${escapeHtml(m.name)}</div>
          <div class="meal-tag">${escapeHtml(m.tag)}</div>
        </div>
        <div class="meal-kcal">${m.kcal > 0 ? m.kcal + ' kcal' : ''}</div>
        <div class="meal-toggle">▾</div>
      </div>
      <div class="meal-body">
        <ul>${m.items.map(it => `<li>${it}</li>`).join('')}</ul>
        ${noteHtml}
      </div>
    </div>
  `;
}

// ====== SHOPPING LIST ======
function renderShoppingList() {
  const el = document.getElementById('shoppingList');
  const checked = JSON.parse(localStorage.getItem('shop_checked') || '[]');

  el.innerHTML = SHOPPING.map(cat => `
    <div class="shop-category">
      <h3>${escapeHtml(cat.cat)}</h3>
      ${cat.items.map(it => {
        const key = cat.cat + '|' + it.n;
        const isChecked = checked.includes(key) ? 'checked' : '';
        return `
          <div class="shop-item ${isChecked}" data-key="${escapeHtml(key)}">
            <div class="shop-check"></div>
            <div class="shop-name">${escapeHtml(it.n)}</div>
            <div class="shop-qty">${escapeHtml(it.q)}</div>
          </div>
        `;
      }).join('')}
    </div>
  `).join('');

  el.querySelectorAll('.shop-item').forEach(it => {
    it.addEventListener('click', () => {
      it.classList.toggle('checked');
      const checkedNow = Array.from(el.querySelectorAll('.shop-item.checked'))
        .map(x => x.dataset.key);
      localStorage.setItem('shop_checked', JSON.stringify(checkedNow));
    });
  });
}

// ====== RULES ======
function renderRules() {
  const el = document.getElementById('rulesList');
  el.innerHTML = RULES.map((r, i) => {
    const cls = r.type === 'warn' ? 'rule-card warn' : (r.type === 'tip' ? 'rule-card tip' : 'rule-card');
    return `
      <div class="${cls}">
        <div class="rule-num">${String(i+1).padStart(2,'0')}</div>
        <div class="rule-title">${escapeHtml(r.title)}</div>
        <div class="rule-body">${r.body}</div>
      </div>
    `;
  }).join('');
}

// ====== TRACKER ======
function renderTracker() {
  const entries = JSON.parse(localStorage.getItem('tracker_entries') || '[]');
  const list = document.getElementById('trackerList');
  const stats = document.getElementById('trackerStats');

  list.innerHTML = entries.length === 0
    ? `<div style="text-align:center;color:var(--text-dim);padding:20px;font-size:13px;">Nessuna pesata ancora. Inizia oggi!</div>`
    : entries.map(e => `
        <div class="tracker-entry">
          <div class="tdate">${formatDate(e.date)}</div>
          <div class="tweight">${e.weight.toFixed(1)} kg</div>
          <button class="tdel" data-id="${e.id}">×</button>
        </div>
      `).join('');

  // Stats
  if (entries.length >= 2) {
    const last = entries[0].weight;
    const first = entries[entries.length - 1].weight;
    const delta = last - first;
    const days = (entries[0].date - entries[entries.length - 1].date) / (1000*60*60*24);
    const weekly = days > 0 ? (delta / days * 7) : 0;
    stats.innerHTML = `
      <div class="tracker-stat">
        <div class="label">Attuale</div>
        <div class="value">${last.toFixed(1)}</div>
      </div>
      <div class="tracker-stat">
        <div class="label">Δ totale</div>
        <div class="value ${delta < 0 ? 'neg' : (delta > 0 ? 'pos' : '')}">${delta >= 0 ? '+' : ''}${delta.toFixed(1)}</div>
      </div>
      <div class="tracker-stat">
        <div class="label">Δ/sett</div>
        <div class="value ${weekly < 0 ? 'neg' : (weekly > 0 ? 'pos' : '')}">${weekly >= 0 ? '+' : ''}${weekly.toFixed(2)}</div>
      </div>
    `;
  } else {
    stats.innerHTML = '';
  }

  // Bind delete
  list.querySelectorAll('.tdel').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const filtered = entries.filter(x => String(x.id) !== id);
      localStorage.setItem('tracker_entries', JSON.stringify(filtered));
      renderTracker();
    });
  });
}

function formatDate(ts) {
  const d = new Date(ts);
  return d.toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: '2-digit' });
}

document.getElementById('addWeightBtn').addEventListener('click', () => {
  const inp = document.getElementById('weightInput');
  const v = parseFloat(inp.value);
  if (!v || v < 30 || v > 250) {
    inp.style.borderColor = 'var(--warn)';
    setTimeout(() => inp.style.borderColor = '', 1000);
    return;
  }
  const entries = JSON.parse(localStorage.getItem('tracker_entries') || '[]');
  entries.unshift({ id: Date.now(), date: Date.now(), weight: v });
  localStorage.setItem('tracker_entries', JSON.stringify(entries));
  inp.value = '';
  renderTracker();
});

// Notes
document.getElementById('saveNotesBtn').addEventListener('click', () => {
  const v = document.getElementById('notesInput').value;
  localStorage.setItem('tracker_notes', v);
  const ts = new Date().toLocaleString('it-IT');
  document.getElementById('notesSaved').textContent = `✓ Salvate ${ts}`;
});

function loadNotes() {
  const v = localStorage.getItem('tracker_notes') || '';
  document.getElementById('notesInput').value = v;
}

// ====== TAB BAR ======
document.querySelectorAll('.bottom-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const view = tab.dataset.view;
    state.currentView = view;
    document.querySelectorAll('.bottom-tab').forEach(t => t.classList.toggle('active', t === tab));
    document.querySelectorAll('.view').forEach(v => {
      v.classList.toggle('active', v.id === 'view-' + view);
    });
    if (view === 'shop') renderShoppingList();
    if (view === 'rules') renderRules();
    if (view === 'track') { renderTracker(); loadNotes(); }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ====== INIT ======
renderDaySelector();
renderDayContent();

// Service worker registration (offline)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(()=>{});
  });
}
