
import { DatePicker, Select } from "antd";

const { Option } = Select;

const DateRangePicker: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-2 gap-5">
      {/* From and To Dates Together */}
      <div className="flex flex-col">
        <label className="text-xs text-gray-600 font-semibold mb-1">
          From - To
        </label>
        <div className="flex gap-2">
          <DatePicker
            placeholder="From"
            className="w-36 h-9 rounded-md border border-gray-300"
          />
          <DatePicker
            placeholder="To"
            className="w-36 h-9 rounded-md border border-gray-300"
          />
        </div>
      </div>

      {/* Select Range */}
      <div className="flex flex-col">
        <label className="text-xs text-gray-600 font-semibold mb-1">
          Select Range
        </label>
        <Select
          defaultValue="Last 6 Months"
          className="w-48 h-9 rounded-md border border-gray-300"
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