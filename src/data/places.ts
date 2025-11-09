import fortressImg from "@/assets/fortress.jpg";
import mirabellImg from "@/assets/mirabell.jpg";
import mozartImg from "@/assets/mozart.jpg";
import zooImg from "@/assets/zoo.jpg";
import hellbrunnImg from "@/assets/hellbrunn.jpg";
import cathedralImg from "@/assets/cathedral.png";
import gasseImg from "@/assets/gasse.png";
import peterImg from "@/assets/peter.png";
import salzmuseumImg from "@/assets/salzmuseum.png";
import domImg from "@/assets/dom.png";
import cablecarImg from "@/assets/cablecar.png";
import hangarImg from "@/assets/hangar.png";
import kapuzinerImg from "@/assets/kapuziner.png";
import soundmusicImg from "@/assets/soundmusic.png";

export interface Place {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  adultPrice: number;
  childPrice: number;
  openingHours: string;
  accessibility: string;
  category: string;
  lat: number;
  lng: number;
}

export const places: Place[] = [
  {
    id: "1",
    slug: "hohensalzburg-fortress",
    name: "Hohensalzburg Fortress",
    shortDescription: "Medieval fortress with panoramic city views",
    description: "One of Europe's largest medieval castles, Hohensalzburg Fortress towers over Salzburg's old town. Built in 1077, this impressive fortification offers breathtaking views of the city and surrounding Alps. Explore royal apartments, medieval chambers, and the fortress museum showcasing centuries of history.",
    image: fortressImg,
    adultPrice: 16.50,
    childPrice: 9.40,
    openingHours: "9:00 AM - 7:00 PM",
    accessibility: "Wheelchair accessible via funicular",
    category: "Historical Sites",
    lat: 47.794952,
    lng: 13.047461
  },
  {
    id: "6",
    slug: "salzburg-cathedral",
    name: "Salzburg Cathedral",
    shortDescription: "Magnificent baroque cathedral in the heart of the city",
    description: "The Salzburg Cathedral (Dom zu Salzburg) is a stunning example of early Baroque architecture. This is where Mozart was baptized and later worked as a court musician. The cathedral features breathtaking frescoes, an impressive dome, and a magnificent organ. The crypt houses the tombs of archbishops dating back centuries.",
    image: cathedralImg,
    adultPrice: 0,
    childPrice: 0,
    openingHours: "8:00 AM - 7:00 PM",
    accessibility: "Wheelchair accessible via side entrance",
    category: "Religious Sites",
    lat: 47.79778,
    lng: 13.04694
  },
  {
    id: "7",
    slug: "getreidegasse",
    name: "Getreidegasse",
    shortDescription: "Historic shopping street with traditional guild signs",
    description: "Getreidegasse is Salzburg's most famous shopping street, known for its wrought-iron guild signs hanging above traditional shops. This charming narrow lane features medieval architecture, boutiques, cafes, and Mozart's birthplace. The street has retained its historic character while offering modern shopping experiences.",
    image: gasseImg,
    adultPrice: 0,
    childPrice: 0,
    openingHours: "Open 24/7",
    accessibility: "Fully accessible",
    category: "Shopping & Culture",
    lat: 47.799982,
    lng: 13.042245
  },
  {
    id: "8",
    slug: "st-peters-abbey",
    name: "St. Peter's Abbey",
    shortDescription: "Ancient Benedictine monastery with stunning cemetery",
    description: "Founded in 696 AD, St. Peter's Abbey is one of the oldest monasteries in the German-speaking world. The complex includes a beautiful Romanesque church, ornate baroque interior, and the famous St. Peter's Cemetery with its catacombs carved into the rock face. The monastery also houses a renowned library and art collection.",
    image: peterImg,
    adultPrice: 2.00,
    childPrice: 1.00,
    openingHours: "9:00 AM - 6:00 PM",
    accessibility: "Partially wheelchair accessible",
    category: "Religious Sites",
    lat: 47.79694,
    lng: 13.04583
  },
  {
    id: "9",
    slug: "salzburg-museum",
    name: "Salzburg Museum",
    shortDescription: "Art and cultural history museum in the Neue Residenz",
    description: "Located in the historic Neue Residenz on Mozart Square, the Salzburg Museum presents the rich cultural history and art of Salzburg and its region. The museum features impressive exhibitions on the city's history, art collections, and interactive displays about famous Salzburg personalities including the Mozart family.",
    image: salzmuseumImg,
    adultPrice: 9.00,
    childPrice: 3.00,
    openingHours: "9:00 AM - 5:00 PM",
    accessibility: "Fully wheelchair accessible with elevator",
    category: "Museums",
    lat: 47.798611,
    lng: 13.047778
  },
  {
    id: "10",
    slug: "domquartier",
    name: "DomQuartier",
    shortDescription: "Museum complex connecting historic buildings",
    description: "The DomQuartier is a unique museum experience connecting the Residenz, Cathedral, St. Peter's Abbey, and the Franciscan Church through a spectacular route. Walk in the footsteps of prince-archbishops through magnificent state rooms, art galleries, and the Cathedral Museum. The tour offers unparalleled views over Salzburg's squares.",
    image: domImg,
    adultPrice: 13.00,
    childPrice: 4.50,
    openingHours: "10:00 AM - 5:00 PM",
    accessibility: "Wheelchair accessible via elevator",
    category: "Museums",
    lat: 47.798757,
    lng: 13.046962
  },
  {
    id: "11",
    slug: "untersberg-cable-car",
    name: "Untersberg Cable Car",
    shortDescription: "Mountain cable car with spectacular alpine views",
    description: "Take a thrilling ride up the Untersberg mountain, reaching 1,776 meters above sea level in just minutes. The cable car offers breathtaking panoramic views of Salzburg, Bavaria, and the surrounding Alps. At the summit, enjoy hiking trails, mountain restaurants, and stunning vistas across three countries.",
    image: cablecarImg,
    adultPrice: 28.00,
    childPrice: 14.00,
    openingHours: "9:00 AM - 5:00 PM",
    accessibility: "Wheelchair accessible cable car",
    category: "Nature & Adventure",
    // Talstation (base station) in St. Leonhard/Grödig
    lat: 47.72565,
    lng: 13.04208
  },
  {
    id: "12",
    slug: "mozart-residence",
    name: "Mozart Residence",
    shortDescription: "The Mozart family's former residence on Makartplatz",
    description: "After outgrowing their apartment on Getreidegasse, the Mozart family moved to this spacious residence in 1773. The museum showcases the family's life during Mozart's Salzburg years, featuring original documents, portraits, and the composer's fortepiano. Experience the elegant rooms where Mozart composed many masterpieces.",
    image: mozartImg,
    adultPrice: 12.00,
    childPrice: 4.00,
    openingHours: "9:00 AM - 5:30 PM",
    accessibility: "Wheelchair accessible via elevator",
    category: "Museums",
    lat: 47.802684,
    lng: 13.043799
  },
  {
    id: "13",
    slug: "hangar-7",
    name: "Hangar-7",
    shortDescription: "Aviation museum and contemporary art gallery",
    description: "This spectacular glass and steel building houses the Flying Bulls collection of historic aircraft, helicopters, and Formula 1 racing cars. The hangar also features contemporary art exhibitions and the Michelin-starred Ikarus restaurant. A unique blend of technology, design, and culinary excellence.",
    image: hangarImg,
    adultPrice: 0,
    childPrice: 0,
    openingHours: "9:00 AM - 10:00 PM",
    accessibility: "Fully wheelchair accessible",
    category: "Museums",
    lat: 47.79369,
    lng: 13.00742
  },
  {
    id: "14",
    slug: "kapuzinerberg",
    name: "Kapuzinerberg Hill",
    shortDescription: "Scenic hill with hiking trails and city views",
    description: "This peaceful wooded hill on the right bank of the Salzach offers excellent hiking trails and spectacular views of Salzburg's old town. Visit the Capuchin Monastery at the summit, explore historic fortifications, and enjoy a tranquil escape from the city bustle. Perfect for nature lovers and photographers.",
    image: kapuzinerImg,
    adultPrice: 0,
    childPrice: 0,
    openingHours: "Open 24/7",
    accessibility: "Limited accessibility, steep paths",
    category: "Nature & Adventure",
    // Capuchin Monastery (good landmark on the hill)
    lat: 47.801941,
    lng: 13.046989
  },
  {
    id: "15",
    slug: "sound-of-music-tour",
    name: "Sound of Music Tour Locations",
    shortDescription: "Visit iconic filming locations from the classic movie",
    description: "Explore the real-life locations featured in the beloved Sound of Music film. See the Nonnberg Abbey where Maria was a novice, the gardens where 'Do-Re-Mi' was filmed, and the lake district that served as the backdrop for the Von Trapp family scenes. A must for fans of the classic musical.",
    image: soundmusicImg,
    adultPrice: 0,
    childPrice: 0,
    openingHours: "Open 24/7",
    accessibility: "Varies by location",
    category: "Tours & Experiences",
    // Representative point: Nonnberg Abbey
    lat: 47.79611,
    lng: 13.05167
  },
  {
    id: "2",
    slug: "mirabell-palace",
    name: "Mirabell Palace & Gardens",
    shortDescription: "Baroque palace with stunning ornamental gardens",
    description: "Built in 1606, Mirabell Palace is a masterpiece of Baroque architecture. The palace gardens are internationally renowned for their beauty, featuring perfectly manicured lawns, marble statues, and fountain displays. Famous as a filming location for 'The Sound of Music', the gardens offer stunning views of the fortress.",
    image: mirabellImg,
    adultPrice: 12.00,
    childPrice: 5.00,
    openingHours: "8:00 AM - 6:00 PM",
    accessibility: "Fully wheelchair accessible",
    category: "Palaces & Gardens",
    lat: 47.805551,
    lng: 13.042115
  },
  {
    id: "3",
    slug: "mozart-birthplace",
    name: "Mozart's Birthplace",
    shortDescription: "Historic home where Mozart was born",
    description: "Visit the house where Wolfgang Amadeus Mozart was born in 1756. This museum on Getreidegasse showcases original instruments, portraits, and documents from Mozart's life. Experience the rooms where the musical genius spent his childhood and see personal belongings from the Mozart family.",
    image: mozartImg,
    adultPrice: 14.00,
    childPrice: 5.00,
    openingHours: "9:00 AM - 5:30 PM",
    accessibility: "Limited accessibility, narrow stairs",
    category: "Museums",
    lat: 47.8,
    lng: 13.043333
  },
  {
    id: "4",
    slug: "salzburg-zoo",
    name: "Salzburg Zoo Hellbrunn",
    shortDescription: "Alpine zoo with over 1,200 animals",
    description: "Set against the stunning backdrop of Hellbrunn Mountain, Salzburg Zoo is home to over 1,200 animals from around the world. The zoo specializes in alpine and European species, with spacious enclosures designed to mimic natural habitats. Perfect for families with children.",
    image: zooImg,
    adultPrice: 13.50,
    childPrice: 6.50,
    openingHours: "9:00 AM - 6:30 PM",
    accessibility: "Wheelchair accessible with some steep paths",
    category: "Family Attractions",
    lat: 47.75746,
    lng: 13.063
  },
  {
    id: "5",
    slug: "hellbrunn-palace",
    name: "Hellbrunn Palace",
    shortDescription: "Renaissance villa with trick fountains",
    description: "Experience the famous trick fountains of Hellbrunn Palace, built in 1619 as a summer residence. The palace features beautiful gardens, grottos, and the world-famous water-powered mechanical theater. Don't miss the surprise water features that have delighted visitors for over 400 years!",
    image: hellbrunnImg,
    adultPrice: 14.50,
    childPrice: 6.50,
    openingHours: "9:00 AM - 5:30 PM",
    accessibility: "Partially wheelchair accessible",
    category: "Palaces & Gardens",
    lat: 47.762222,
    lng: 13.060833
  },
];
