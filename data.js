/* clementine — data.js
   Das ist die einzige Datei, die du zum Aktualisieren der Website brauchst.
   Einfach neue Objekte in die passende Liste einfügen (Kommas beachten!).
   Reihenfolge ist egal — die Seiten sortieren automatisch nach Datum.
*/

const CLEMENTINE_DATA = {

  // --- Upcoming Shows -----------------------------------------------
  // date im Format "YYYY-MM-DD", link ist optional (sonst "" lassen)
  shows: [
    
     { date: "2026-09-01", city: "Hirscheneck", venue: "w/rubber commune - IAMCHAINSAW (PEB) / Market Saturee", 
     { date: "2026-09-10", city: "Hirscheneck", venue: "w/mental load - Giulio Erasmus & The Target Group / TBA", link: "https://www.petzi.ch/organiser/327140/" },
    { date: "2026-09-19", city: "Hirscheneck", venue: "Tiramisadness Duo / Pet Owner", link: "" },
    { date: "2026-09-29", city: "Hirscheneck", venue: "w/mental load  - Deli Girls / TBA", link: "" },
  ],

  // --- News / Blog -----------------------------------------------------
  // body kann mehrere Absätze enthalten, einfach mit \n\n trennen
  news: [
    {
      date: "2026-07-14",
      title: "neues material",
      body: "es tut sich was im studio. mehr dazu bald."
    },
    {
      date: "2026-05-02",
      title: "sommer, unterwegs",
      body: "ein paar neue termine sind dazugekommen — siehe upcoming shows."
    },
  ],

  // --- Links (öffentlich) ----------------------------------------------
  links: [
    { name: "Bandcamp", url: "https://bandcamp.com", note: "Aufnahmen & Releases" },
    { name: "Ein befreundetes Label", url: "https://example.com", note: "" },
  ],

  // --- Map Pins (nur nach Passwort sichtbar) ----------------------------
  // Namen bewusst kurz/kryptisch halten, keine vollen Klarnamen nötig
  mapPins: [
    { name: "K.", lat: 47.5596, lng: 7.5886, note: "Basel" },
    { name: "M.", lat: 46.9481, lng: 7.4474, note: "Bern" },
    { name: "S.", lat: 47.3769, lng: 8.5417, note: "Zürich" },
  ],
};
