// clementine — maps.js
// Wichtig: das ist nur ein simpler Sichtschutz (client-seitig), kein echter
// Zugriffsschutz — jemand, der den Seitenquelltext liest, findet das Passwort.
// Für "gut genug vor zufälligen Besucher:innen" reicht es aber völlig aus.

const MAP_PASSWORD = "clementinebasel";
const SESSION_KEY = "clementineMapUnlocked";

function showMap() {
  document.getElementById("lock-screen").style.display = "none";
  const mapEl = document.getElementById("map");
  mapEl.style.display = "block";

  const map = L.map("map").setView([47.0, 8.2], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 18,
  }).addTo(map);

  CLEMENTINE_DATA.mapPins.forEach(pin => {
    L.marker([pin.lat, pin.lng])
      .addTo(map)
      .bindPopup(`<strong>${pin.name}</strong>${pin.note ? `<br>${pin.note}` : ""}`);
  });
}

function tryUnlock(e) {
  e.preventDefault();
  const input = document.getElementById("pw-input");
  const error = document.getElementById("pw-error");
  if (input.value === MAP_PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, "1");
    showMap();
  } else {
    error.textContent = "falsches passwort.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("lock-form");
  if (form) form.addEventListener("submit", tryUnlock);
  if (sessionStorage.getItem(SESSION_KEY) === "1") {
    showMap();
  }
});
