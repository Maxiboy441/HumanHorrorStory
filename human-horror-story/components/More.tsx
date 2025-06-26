import React from "react";
import Link from "next/link";

interface MoreProps {
  href?: string;
}

export const More: React.FC<MoreProps> = ({ href }) => {
  if (!href) return null;

  return (
    <div className="mt-6">
      <Link
        href={href}
        className="inline-block px-6 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-md transition-colors"
      >
        More Info
      </Link>
    </div>
  );
};
