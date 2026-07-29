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
      ${s.link ? ` — <a href="${s.link}" target="_blank" rel="noopener">tickets</a>` : ""}
    </li>
  `).join("");
  if (items.length === 0) {
    el.innerHTML = `<li>im moment nichts geplant — schau später wieder vorbei.</li>`;
  }
}

function renderNews() {
  const el = document.getElementById("news-list");
  if (!el) return;
  const items = [...CLEMENTINE_DATA.news].sort((a, b) => b.date.localeCompare(a.date));
  el.innerHTML = items.map(n => `
    <article class="news-entry">
      <div class="meta">${formatDate(n.date)}</div>
      <div class="item-title">${n.title}</div>
      ${n.body.split("\n\n").map(p => `<p>${p}</p>`).join("")}
    </article>
  `).join("");
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
  renderNews();
  renderLinks();
});
