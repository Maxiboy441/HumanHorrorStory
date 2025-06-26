"use client";

import React from "react";
import { Infotext } from "./Infotext";
import { More } from "./More";
import Scrolltrough from "./Scrolltrough";

interface EventProps {
  title: string;
  description?: string;
  icon: string;
  deaths: number;
  timeframe: number;
  scrollDirection?: "left" | "right";
  moreHref?: string;
}

const formatTimeframe = (seconds: number): string => {
  const yearSec = 31557600;
  const monthSec = yearSec / 12;
  const weekSec = 604800;
  const daySec = 86400;
  const hourSec = 3600;

  if (seconds >= 2 * yearSec) {
    const years = (seconds / yearSec).toFixed(1);
    return `${years} year${+years !== 1 ? "s" : ""}`;
  }

  if (seconds >= yearSec) {
    const months = (seconds / monthSec).toFixed(1);
    return `${months} month${+months !== 1 ? "s" : ""}`;
  }

  if (seconds >= monthSec) {
    const months = (seconds / monthSec).toFixed(1);
    return `${months} month${+months !== 1 ? "s" : ""}`;
  }

  if (seconds >= weekSec) {
    const weeks = (seconds / weekSec).toFixed(1);
    return `${weeks} week${+weeks !== 1 ? "s" : ""}`;
  }

  if (seconds >= daySec) {
    const days = (seconds / daySec).toFixed(1);
    return `${days} day${+days !== 1 ? "s" : ""}`;
  }

  if (seconds >= hourSec) {
    const hours = (seconds / hourSec).toFixed(1);
    return `${hours} hour${+hours !== 1 ? "s" : ""}`;
  }

  return `${seconds.toFixed(0)} second${seconds !== 1 ? "s" : ""}`;
};

export const ClimateChange: React.FC<EventProps> = ({
  title,
  description,
  icon,
  deaths,
  timeframe,
  scrollDirection = "left",
  moreHref,
}) => {
  const deathsPerSecond = (deaths / timeframe).toFixed(2);
  const formattedTimeframe = formatTimeframe(timeframe);

  return (
    <section className="my-20 max-w-5xl mx-auto px-4 text-center space-y-8">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-white tracking-tight">
        Incoming: {title}
      </h2>

      {/* Description */}
      <Infotext text={description} />

      {/* Statistics */}
      <div className="text-gray-400 text-sm space-y-1">
        <p>
          <span className="font-semibold text-white">Total deaths:</span>{" "}
          All
        </p>
        <p>
          <span className="font-semibold text-white">Timeframe:</span>{" "}
          Forever
        </p>
        <p>
          <span className="font-semibold text-white">Deaths per second:</span>{" "}
          {deathsPerSecond}+
        </p>
      </div>

      {/* Scrolling icon visualization */}
      <Scrolltrough
        icon={icon}
        count={deaths}
        duration={timeframe}
        scrollDirection={scrollDirection}
      />

      {/* Link to more info */}
      <More href={moreHref} />
    </section>
  );
};
