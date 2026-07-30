// clementine — render.js
// Liest CLEMENTINE_DATA aus data.js und füllt die Listen auf jeder Seite.

function formatDate(iso) {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

function renderShows() {
  const el = document.getElementById("shows-list");
  if (!el) return;
  const items = [...CLEMENTINE_DATA.shows].sort((a, b) => a.date.localeCompare(b.date));
  el.innerHTML = items.map(s => `
    <li>
      <span class="meta">${formatDate(s.date)}</span> —
      <span class="item-title">${s.city}</span>, ${s.venue}
      ${s.link ? ` <a href="${s.link}" target="_blank" rel="noopener" class="ticket-btn">tickets</a>` : ""}
    </li>
  `).join("");
  if (items.length === 0) {
    el.innerHTML = `<li>im moment nichts geplant — schau später wieder vorbei.</li>`;
  }
}

function renderNewsArchive() {
  const el = document.getElementById("news-archive-list");
  if (!el) return;
  const items = [...CLEMENTINE_DATA.news].sort((a, b) => b.date.localeCompare(a.date));
  const older = items.slice(5);
  if (older.length === 0) {
    el.innerHTML = `<p class="meta">noch keine älteren einträge.</p>`;
    return;
  }
  el.innerHTML = older.map(newsEntryHTML).join("");
}

function newsEntryHTML(n) {
  return `
    <article class="news-entry">
      <div class="meta">${formatDate(n.date)}</div>
      <div class="item-title">${n.title}</div>
      ${n.body.split("\n\n").map(p => `<p>${p}</p>`).join("")}
    </article>`;
}

function renderHomeNews() {
  const list = document.getElementById("home-news-list");
  if (!list) return;
  const items = [...CLEMENTINE_DATA.news].sort((a, b) => b.date.localeCompare(a.date));

  if (items.length === 0) {
    list.innerHTML = `<p class="meta">noch keine einträge.</p>`;
    return;
  }

  const primary = items.slice(0, 2);
  const extra = items.slice(2, 5);
  const hasArchive = items.length > 5;

  let html = primary.map(newsEntryHTML).join("");

  if (extra.length > 0) {
    html += `<div id="home-news-extra" style="display:none;">${extra.map(newsEntryHTML).join("")}</div>`;
    html += `<button id="home-news-toggle" class="toggle-btn" type="button">mehr anzeigen</button>`;
  }

  if (hasArchive) {
    html += `<p class="meta" style="margin-top:14px;"><a href="news.html">ältere einträge →</a></p>`;
  }

  list.innerHTML = html;

  const toggle = document.getElementById("home-news-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const extraEl = document.getElementById("home-news-extra");
      const expanded = extraEl.style.display !== "none";
      extraEl.style.display = expanded ? "none" : "block";
      toggle.textContent = expanded ? "mehr anzeigen" : "weniger anzeigen";
    });
  }
}

function renderLinks() {
  const el = document.getElementById("links-list");
  if (!el) return;
  el.innerHTML = CLEMENTINE_DATA.links.map(l => `
    <li>
      <a href="${l.url}" target="_blank" rel="noopener">${l.name}</a>
      ${l.note ? ` — ${l.note}` : ""}
    </li>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderShows();
  renderNewsArchive();
  renderHomeNews();
  renderLinks();
});
