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
          <span className="material-symbols-outlined"> search </span>
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
            <span className="material-symbols-outlined"> filter_alt </span>
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
