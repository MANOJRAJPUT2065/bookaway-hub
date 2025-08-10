import { useMemo } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { DateRange } from "react-day-picker";

interface Props {
  value?: DateRange;
  onChange?: (value: DateRange | undefined) => void;
}

const DateRangePicker = ({ value, onChange }: Props) => {
  const label = useMemo(() => {
    if (value?.from && value?.to) return `${format(value.from, "MMM d")} - ${format(value.to, "MMM d, yyyy")}`;
    if (value?.from) return `${format(value.from, "MMM d, yyyy")} →`;
    return "Select dates";
  }, [value]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start text-left font-normal">
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={value?.from}
          selected={value}
          onSelect={onChange}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DateRangePicker;
