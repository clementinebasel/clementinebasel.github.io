/* clementine — data.js
   Das ist die einzige Datei, die du zum Aktualisieren der Website brauchst.
   Einfach neue Objekte in die passende Liste einfügen (Kommas beachten!).
   Reihenfolge ist egal — die Seiten sortieren automatisch nach Datum.
*/

const CLEMENTINE_DATA = {

  // --- Upcoming Shows -----------------------------------------------
  // date im Format "YYYY-MM-DD", link (Tickets) ist optional (sonst "" lassen)
  // bands: optionale Liste mit 2-3 Bandcamp-Buttons pro Show, z.B.
  //   bands: [ { name: "Clementine", url: "https://clementine.bandcamp.com" },
  //            { name: "Support-Act", url: "https://supportact.bandcamp.com" } ]
  // Leer lassen mit bands: [] wenn (noch) keine Bandcamp-Links vorhanden sind.
  shows: [
    
    { date: "2026-09-01", city: "Hirscheneck", venue: "w/ rubber commune - PEB IAMCHAINSAW / Market Saturee / Rim H DJ-Set", bands: [ {name: "PEB", url: "https://edelfaulrecordings.bandcamp.com/album/iamchainsaw?search_item_id%3D3027252575%26search_item_type%3Da%26search_match_part%3D%253F%26search_page_id%3D5651199350%26search_page_no%3D0%26search_rank%3D1=" }, 
                                                                                                                      {name: "Market Saturee", url: "https://rubbercommune.bandcamp.com/album/s-t" }] },
    { date: "2026-09-10", city: "Hirscheneck", venue: "w/ mental load - Giulio Erasmus and The Target Group / Ohm Sweet", link: "https://www.petzi.ch/organiser/327140/", bands: [] },
    { date: "2026-09-19", city: "Hirscheneck", venue: "Tiramisadness Duo / Pet Owner POSTPONED", link: "", bands: [] },
    { date: "2026-09-19", city: "Hirscheneck", venue: "w/ mental load - Deli Girls / srip.exe & Vdot / DJ Würm / t_fortuna", link: "https://www.petzi.ch/events/64463/tickets/#ticket-117818", bands: [] },
    { date: "2026-10-01", city: "Hirscheneck", venue: "Blaskapelle Chancentod / PAKS", link: "", bands: [] },
    { date: "2026-10-10", city: "Hirscheneck", venue: "w/ Plattfon, Rubber Commune & LUFF - Tzu Ni, Daniel Maszkowicz, Mehmet Ali Simayli, Miao Zhao", link: "https://www.petzi.ch/events/64791/tickets/#ticket-118761", bands: [] },
    { date: "2026-10-30", city: "TBA", venue: "w/ mental load - Teamwork / Iz Kaspar", link: "", bands: [] }, 
    { date: "2026-10-30", city: "Hirscheneck", venue: "Splizz / Zuckerbecker", link: "https://www.petzi.ch/events/64464/tickets/#ticket-117820", bands: [] },
    { date: "2026-11-05", city: "Hirscheneck", venue: "Flora / EGGS", link: "https://www.petzi.ch/events/64467/tickets/#ticket-117831", bands: [] },
    { date: "2026-11-19", city: "Hirscheneck", venue: "Lemongrab / TBA", link: "https://www.petzi.ch/events/64468/tickets/#ticket-117833", bands: [] },
    { date: "2026-11-21", city: "Hirscheneck", venue: "BiG Muff / Rawhead Comes Alive", link: "", bands: [] },
    { date: "2026-12-05", city: "Hirscheneck", venue: "Brezel Göring / Cutecumber", link: "https://www.petzi.ch/events/64347/tickets/#ticket-117520", bands: [ {name: "Brezel Göring & Psychoanalyse", url: "https://brezelgoering.bandcamp.com/album/arbeitslos-in-berlin" }, 
                                                                                                                                                              {name: "Cutecumber", url: "https://cutecumber.bandcamp.com/track/stolen-moment" } ] },
   
  ],

  // --- News / Blog -----------------------------------------------------
  // body kann mehrere Absätze enthalten, einfach mit \n\n trennen
  news: [
    {
      date: "2026-07-14",
      title: "review #3 moleskine - "affective experience of urban space",
      body: " "
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
