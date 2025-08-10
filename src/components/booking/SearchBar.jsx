import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import DateRangePicker from "./DateRangePicker";

const SearchBar = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [guests, setGuests] = useState("2");
  const [range, setRange] = useState({ from: undefined, to: undefined });

  const onSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (range.from) params.set("from", format(range.from, "yyyy-MM-dd"));
    if (range.to) params.set("to", format(range.to, "yyyy-MM-dd"));
    if (guests) params.set("guests", guests);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <form
      onSubmit={onSearch}
      className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr_auto] gap-3 bg-white/80 backdrop-blur rounded-lg p-3 md:p-4 border border-gray-300 shadow-sm"
    >
      <div>
        <label className="block text-sm text-gray-700 mb-1" htmlFor="destination">Destination</label>
        <input
          id="destination"
          type="text"
          placeholder="Where are you going?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          aria-label="Destination"
          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-700 mb-1">Dates</label>
        <DateRangePicker value={range} onChange={setRange} />
      </div>
      <div>
        <label className="block text-sm text-gray-700 mb-1" htmlFor="guests">Guests</label>
        <select
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Guests"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <option key={n} value={String(n)}>
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-end">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
