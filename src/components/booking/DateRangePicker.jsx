import { useState } from "react";

const SimpleDateRangePicker = ({ value, onChange }) => {
  const [from, setFrom] = useState(value?.from || "");
  const [to, setTo] = useState(value?.to || "");

  const handleFromChange = (e) => {
    const newFrom = e.target.value;
    setFrom(newFrom);
    onChange({ from: newFrom, to });
  };

  const handleToChange = (e) => {
    const newTo = e.target.value;
    setTo(newTo);
    onChange({ from, to: newTo });
  };

  return (
    <div className="flex gap-2">
      <input
        type="date"
        value={from}
        onChange={handleFromChange}
        aria-label="Start date"
        className="border p-1 rounded"
      />
      <span>to</span>
      <input
        type="date"
        value={to}
        onChange={handleToChange}
        aria-label="End date"
        className="border p-1 rounded"
      />
    </div>
  );
};

export default SimpleDateRangePicker;
