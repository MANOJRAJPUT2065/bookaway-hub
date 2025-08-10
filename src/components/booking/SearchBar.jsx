import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DateRangePicker from "./DateRangePicker";
import { DateRange } from "react-day-picker";

const SearchBar = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [guests, setGuests] = useState("2");
  const [range, setRange] = useState<DateRange | undefined>({ from: undefined, to: undefined });

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (range?.from) params.set("from", format(range.from, "yyyy-MM-dd"));
    if (range?.to) params.set("to", format(range.to, "yyyy-MM-dd"));
    if (guests) params.set("guests", guests);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <form onSubmit={onSearch} className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr_auto] gap-3 bg-card/80 backdrop-blur rounded-lg p-3 md:p-4 border border-border shadow-sm">
      <div>
        <label className="block text-sm text-muted-foreground mb-1">Destination</label>
        <Input
          placeholder="Where are you going?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          aria-label="Destination"
        />
      </div>
      <div>
        <label className="block text-sm text-muted-foreground mb-1">Dates</label>
        <DateRangePicker value={range} onChange={setRange} />
      </div>
      <div>
        <label className="block text-sm text-muted-foreground mb-1">Guests</label>
        <Select value={guests} onValueChange={setGuests}>
          <SelectTrigger aria-label="Guests">
            <SelectValue placeholder="Guests" />
          </SelectTrigger>
          <SelectContent>
            {[1,2,3,4,5,6,7,8].map((n) => (
              <SelectItem key={n} value={String(n)}>{n} {n===1?"guest":"guests"}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-end">
        <Button type="submit" variant="hero" size="lg" className="w-full">Search</Button>
      </div>
    </form>
  );
};

export default SearchBar;
