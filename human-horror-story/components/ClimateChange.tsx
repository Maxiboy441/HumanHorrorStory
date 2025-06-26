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
          <span className="font-semibold text-white">Total deaths:</span> All
        </p>
        <p>
          <span className="font-semibold text-white">Timeframe:</span> Forever
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
