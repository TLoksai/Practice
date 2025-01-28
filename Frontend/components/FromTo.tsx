import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; // Calendar icon
import DatePicker from 'react-datepicker'; // Import DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Import styles for DatePicker

const FromTo = () => {
  // State to store selected dates and selected range
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [range, setRange] = useState<number>(1); // Default range is 1 month

  // Function to update job overview based on selected range
  const getJobOverviewData = (range: number) => {
    switch (range) {
      case 1: // Last 1 Month
        return {
          applicants: 190,
          numberOfJobs: 30,
          positions: 70,
          positionsLeft: 43,
          shortlisted: 27,
          interview: 30,
          offered: 15,
          hired: 5,
          rejected: 10,
        };
      case 2: // Last 2 Months
        return {
          applicants: 250,
          numberOfJobs: 45,
          positions: 110,
          positionsLeft: 80,
          shortlisted: 40,
          interview: 50,
          offered: 25,
          hired: 12,
          rejected: 18,
        };
      case 3: // Last 3 Months
        return {
          applicants: 350,
          numberOfJobs: 60,
          positions: 130,
          positionsLeft: 100,
          shortlisted: 60,
          interview: 70,
          offered: 35,
          hired: 15,
          rejected: 25,
        };
      case 6: // Last 6 Months
        return {
          applicants: 450,
          numberOfJobs: 80,
          positions: 150,
          positionsLeft: 120,
          shortlisted: 75,
          interview: 90,
          offered: 50,
          hired: 25,
          rejected: 35,
        };
      case 12: // Last 1 Year
        return {
          applicants: 600,
          numberOfJobs: 100,
          positions: 200,
          positionsLeft: 150,
          shortlisted: 100,
          interview: 120,
          offered: 70,
          hired: 35,
          rejected: 50,
        };
      default:
        return {
          applicants: 190,
          numberOfJobs: 30,
          positions: 70,
          positionsLeft: 43,
          shortlisted: 27,
          interview: 30,
          offered: 15,
          hired: 5,
          rejected: 10,
        };
    }
  };

  const jobOverview = getJobOverviewData(range); // Get the job overview based on selected range

  // Function to handle the range selection
  const handleRangeSelection = (months: number) => {
    const currentDate = new Date();
    const from = new Date(currentDate);
    const to = new Date(currentDate);

    from.setMonth(currentDate.getMonth() - months); // Set the 'from' date based on selected range
    setFromDate(from);
    setToDate(to); // Set 'to' date to today

    setRange(months); // Update selected range
  };

  return (
    <div className="flex space-x-8 w-full flex-col">
      {/* From Date Picker */}
      <div className="flex space-x-8 w-full">
        <div className="w-1/4">
          <span className="text-yellow-700 font-semibold block mb-1">From</span>
          <div className="relative">
            <input
              type="text"
              readOnly
              value={fromDate ? fromDate.toLocaleDateString() : 'Select From Date'}
              className="p-2 border rounded w-full bg-yellow-50 border-yellow-500 text-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
            />
            {/* Calendar icon */}
            <FaCalendarAlt
              onClick={() => document.getElementById('fromDatePicker')?.click()}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-700 cursor-pointer"
            />
            {/* Hidden DatePicker */}
            <DatePicker
              id="fromDatePicker"
              selected={fromDate}
              onChange={(date: Date | null) => setFromDate(date)}
              className="hidden"
              dateFormat="yyyy/MM/dd"
            />
          </div>
        </div>

        {/* To Date Picker */}
        <div className="w-1/4">
          <span className="text-yellow-700 font-semibold block mb-1">To</span>
          <div className="relative">
            <input
              type="text"
              readOnly
              value={toDate ? toDate.toLocaleDateString() : 'Select To Date'}
              className="p-2 border rounded w-full bg-yellow-50 border-yellow-500 text-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
            />
            {/* Calendar icon */}
            <FaCalendarAlt
              onClick={() => document.getElementById('toDatePicker')?.click()}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-700 cursor-pointer"
            />
            {/* Hidden DatePicker */}
            <DatePicker
              id="toDatePicker"
              selected={toDate}
              onChange={(date: Date | null) => setToDate(date)}
              className="hidden"
              dateFormat="yyyy/MM/dd"
            />
          </div>
        </div>

        {/* Date Range Selector */}
        <div className="ml-auto flex flex-col justify-between w-1/4">
          <span className="text-yellow-700 font-semibold block mb-1">Select Range</span>
          <select
            value={range}
            onChange={(e) => handleRangeSelection(Number(e.target.value))}
            className="p-2 border rounded bg-yellow-50 text-yellow-800 border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value={1}>Last 1 Month</option>
            <option value={2}>Last 2 Months</option>
            <option value={3}>Last 3 Months</option>
            <option value={6}>Last 6 Months</option>
            <option value={12}>Last 1 Year</option>
          </select>
        </div>
      </div>

      {/* Job Overview Box */}
      <div className="mt-8 p-6 border rounded shadow-md bg-blue-50">
        <h3 className="text-xl font-semibold text-yellow-700 mb-6">Job Overview</h3>
        <div className="flex justify-between space-x-4">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">{jobOverview.applicants}</span>
            <span className="text-sm text-gray-500">Applicants</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">{jobOverview.numberOfJobs}</span>
            <span className="text-sm text-gray-500">Jobs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">{jobOverview.positions}</span>
            <span className="text-sm text-gray-500">Positions</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">{jobOverview.positionsLeft}</span>
            <span className="text-sm text-gray-500">Positions Left</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">{jobOverview.shortlisted}</span>
            <span className="text-sm text-gray-500">Shortlisted</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">{jobOverview.interview}</span>
            <span className="text-sm text-gray-500">Interview</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">{jobOverview.offered}</span>
            <span className="text-sm text-gray-500">Offered</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">{jobOverview.hired}</span>
            <span className="text-sm text-gray-500">Hired</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-600">{jobOverview.rejected}</span>
            <span className="text-sm text-gray-500">Rejected</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromTo;
