"use client";

export default function Input({ onSearch, value }) {
  return (
    <input
      type="search"
      name="search"
      id="search"
      value={value}
      className="flex-1 border-none focus:bg-slate-100 focus:ring-0"
      placeholder="Search"
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}
