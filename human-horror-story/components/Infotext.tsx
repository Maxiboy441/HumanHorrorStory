import React from "react";

interface InfotextProps {
  text?: string;
}

export const Infotext: React.FC<InfotextProps> = ({ text }) => {
  if (!text) return null;

  return (
    <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
      {text}
    </p>
  );
};
