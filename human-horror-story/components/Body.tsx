import React from "react";
import { Event } from "./Event";
import { ClimateChange } from "./ClimateChange";

interface EventData {
  title: string;
  description?: string;
  icon: string;
  deaths: number;
  timeframe: number; // in years
  scrollDirection?: "left" | "right";
  moreHref?: string;
}

const SECONDS_PER_YEAR = 31557600;

const events: EventData[] = [
  {
    title: "Hiroshima Atomic Bomb",
    description:
      "The atomic bombing of Hiroshima in August 1945, killing approximately 140,000 people.",
    icon: "/assets/hiroshima.png",
    deaths: 100000,
    timeframe: 0.00017123287,
    scrollDirection: "left",
    moreHref: "https://en.wikipedia.org/wiki/Hiroshima",
  },
  {
    title: "Rwanda Genocide",
    description:
      "The genocide against the Tutsi in Rwanda during 1994, where about 800,000 people were killed in roughly 100 days.",
    icon: "/assets/rwanda.png",
    deaths: 1000000,
    timeframe: 0.2739726027,
    scrollDirection: "left",
    moreHref: "https://en.wikipedia.org/wiki/Rwandan_genocide",
  },
  {
    title: "COVID-19 Pandemic",
    description:
      "The COVID-19 pandemic has caused more than 7 million confirmed deaths worldwide since 2019.",
    icon: "/assets/cov19.png",
    deaths: 7000000,
    timeframe: 4,
    scrollDirection: "left",
    moreHref: "https://en.wikipedia.org/wiki/COVID-19_pandemic",
  },
  {
    title: "Spanish Flu Pandemic",
    description:
      "An influenza pandemic from 1918–1919 that infected about one third of the world’s population.",
    icon: "/assets/flu.png",
    deaths: 50000000,
    timeframe: 2,
    scrollDirection: "left",
    moreHref: "https://en.wikipedia.org/wiki/Spanish_flu",
  },
  {
    title: "Great Chinese Famine",
    description:
      "A famine between 1959 and 1961 caused by social, political, and natural factors, resulting in 15–45 million deaths.",
    icon: "/assets/china.png",
    deaths: 30000000,
    timeframe: 3,
    scrollDirection: "left",
    moreHref: "https://en.wikipedia.org/wiki/Great_Chinese_Famine",
  },
  {
    title: "World War I",
    description:
      "A global war centered in Europe from 1914 to 1918, resulting in around 17 million deaths.",
    icon: "/assets/ww1.png",
    deaths: 17000000,
    timeframe: 4,
    scrollDirection: "left",
    moreHref: "https://en.wikipedia.org/wiki/World_War_I",
  },
  {
    title: "Holocaust",
    description:
      "The genocide of approximately 6 million Jews by Nazi Germany during World War II.",
    icon: "/assets/davidstern.png",
    deaths: 6000000,
    timeframe: 6,
    scrollDirection: "left",
    moreHref: "https://en.wikipedia.org/wiki/The_Holocaust",
  },
  {
    title: "World War II",
    description:
      "The deadliest conflict in human history with over 70 million casualties worldwide.",
    icon: "/assets/ww2.png",
    deaths: 70000000,
    timeframe: 6,
    scrollDirection: "left",
    moreHref: "https://en.wikipedia.org/wiki/World_War_II",
  },
  {
    title: "Taiping Rebellion",
    description:
      "A massive civil war in southern China from 1850 to 1864, causing an estimated 20–30 million deaths.",
    icon: "/assets/taiping.jpg",
    deaths: 25000000,
    timeframe: 14,
    scrollDirection: "left",
    moreHref: "https://en.wikipedia.org/wiki/Taiping_Rebellion",
  },
  {
    title: "Cambodian Genocide",
    description:
      "The mass killing under the Khmer Rouge regime from 1975 to 1979 with an estimated 1.8 million deaths.",
    icon: "/assets/cambodian.png",
    deaths: 1800000,
    timeframe: 4,
    scrollDirection: "left",
    moreHref: "https://en.wikipedia.org/wiki/Cambodian_genocide",
  },
  {
    title: "Climate Change (Current Impact)",
    description:
      "Currently, climate change is estimated to cause over 5 million deaths annually due to environmental and health impacts.",
    icon: "/assets/globe.png",
    deaths: 5000000,
    timeframe: 1,
    scrollDirection: "left",
    moreHref: "https://en.wikipedia.org/wiki/Climate_change",
  },
];

const climateChange: EventData[] = [
  {
    title: "Climate Change (2100 Worst Case)",
    description:
      "By 2100, unchecked climate change could lead to catastrophic disasters resulting in hundreds of millions of deaths globally.",
    icon: "/assets/globeonfire.png",
    deaths: 120,
    timeframe: 75,
    scrollDirection: "left",
    moreHref: "https://en.wikipedia.org/wiki/Climate_change",
  },
];

const eventsSorted = events
  .map((e) => ({
    ...e,
    timeframe: e.timeframe * SECONDS_PER_YEAR,
    deathsPerSecond: e.deaths / (e.timeframe * SECONDS_PER_YEAR),
  }))
  .sort((a, b) => a.deathsPerSecond - b.deathsPerSecond);

export const Body: React.FC = () => (
  <main>
    {eventsSorted.map((event) => (
      <Event key={event.title} {...event} />
    ))}

    <div>
      {climateChange.map((event) => (
        <ClimateChange key={event.title} {...event} />
      ))}
    </div>
  </main>
);
