"use client";

import { useState } from "react";

const Aside = () => {
    const [showAside, setShowAside] = useState(true);

    return (
        <div className="relative h-full">
            <aside
                className={`h-full w-64 border-r-2 border-slate-200 transition-all duration-700 ${
                    !showAside && "w-0 -translate-x-64"
                }`}
            >
                <p>Side Menu</p>
            </aside>
            <button
                className={`absolute left-8 bottom-8 h-14 w-14 rounded-full border-2 ${
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
