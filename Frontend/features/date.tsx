import React from "react";
import { DatePicker, Select } from "antd";

const { Option } = Select;

interface DateRangePickerProps {
  onRangeChange: (value: string) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onRangeChange }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* From and To Dates */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label
            style={{
              fontSize: "12px",
              color: "#555555",
              fontWeight: "600",
              marginBottom: "4px",
            }}
          >
            From
          </label>
          <DatePicker
            placeholder="Select Date"
            style={{
              width: "140px",
              height: "36px",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label
            style={{
              fontSize: "12px",
              color: "#555555",
              fontWeight: "600",
              marginBottom: "4px",
            }}
          >
            To
          </label>
          <DatePicker
            placeholder="Select Date"
            style={{
              width: "140px",
              height: "36px",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>

      {/* Select Range */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label
          style={{
            fontSize: "12px",
            color: "#555555",
            fontWeight: "600",
            marginBottom: "4px",
          }}
        >
          Select Range
        </label>
        <Select
          defaultValue="Last 6 Months"
          onChange={onRangeChange}
          style={{
            width: "200px",
            height: "36px",
            borderRadius: "4px",
          }}
        >
          <Option value="Last 6 Months">Last 6 Months</Option>
          <Option value="Last Year">Last Year</Option>
          <Option value="Custom Range">Custom Range</Option>
        </Select>
      </div>
    </div>
  );
};

export default DateRangePicker;
