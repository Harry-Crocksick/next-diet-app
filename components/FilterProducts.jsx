"use client";

import { useState } from "react";
import Input from "./Input";
import ExtraInfo from "./ExtraInfo";
import Card from "./card";
import { specialSets } from "@/lib/special-set";

export default function FilterProducts() {
  const [query, setQuery] = useState("");
  const searchQuery = query.trim().toLowerCase();

  function handleSearch(searchText) {
    setQuery(searchText);
  }

  const filteredItems = specialSets.filter((specialSet) =>
    specialSet.name.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <div className="flex flex-wrap items-center gap-4 justify-between">
        <div className="flex items-center max-w-[475px] w-full border-2 border-black rounded-full px-4 py-1">
          <span aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="22"
              viewBox="0 -960 960 960"
              width="22"
              className="text-slate-500"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>{" "}
          </span>
          <Input onSearch={handleSearch} value={query} />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="filter-tag">
            <span aria-label="Show">Show: </span>
            <span className="text-slate-500">1 of 5</span>
          </div>
          <div className="filter-tag">
            <span aria-label="Sort by">Sort By: </span>
            <span className="text-slate-500">Newest</span>
          </div>
          <div className="filter-tag">
            <span aria-label="Filter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z" />
              </svg>
            </span>
            <span>Filter</span>
          </div>
        </div>
      </div>
      <ExtraInfo title="Special Set">
        Your unique diet plan, crafted for your health and taste preferences and
        personalized approah to welliness.
      </ExtraInfo>
      {/* <!-- special set cards starts --> */}
      <div className={`w-full responsive-grid gap-6`}>
        {filteredItems.map((specialSet) => (
          <Card key={specialSet.id} {...specialSet} />
        ))}
      </div>
    </>
  );
}
