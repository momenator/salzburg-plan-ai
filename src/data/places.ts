import fortressImg from "@/assets/fortress.jpg";
import mirabellImg from "@/assets/mirabell.jpg";
import mozartImg from "@/assets/mozart.jpg";
import zooImg from "@/assets/zoo.jpg";
import hellbrunnImg from "@/assets/hellbrunn.jpg";

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
    category: "Historical Sites"
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
    category: "Palaces & Gardens"
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
    category: "Museums"
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
    category: "Family Attractions"
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
    category: "Palaces & Gardens"
  },
];
