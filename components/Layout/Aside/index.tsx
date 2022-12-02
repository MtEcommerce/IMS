"use client";

import { useState } from "react";

const Aside = () => {
  const [showAside, setShowAside] = useState(true);

  return (
    <div className="relative h-full">
      <aside
        className={`w-64 h-full border-r-2 border-slate-200 transition-all duration-700 ${
          !showAside && "w-0 -translate-x-64"
        }`}
      >
        <p>Side Menu</p>
      </aside>
      <button
        className={`absolute left-8 bottom-8 w-14 h-14 border-2 rounded-full ${
          showAside ? "bg-green-400" : "bg-rose-400"
        }`}
        onClick={() => setShowAside((prev) => !prev)}
      >
        {showAside ? "T" : "F"}
      </button>
    </div>
  );
};

export default Aside;
