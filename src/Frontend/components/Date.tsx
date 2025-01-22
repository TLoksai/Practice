"use client";

import { Datepicker } from "flowbite-react";
import './App.css';

export function Date() {
  return (
    <div className="flex justify-center items-center p-4 space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Select a Date</h2>
      <Datepicker className="w-64" />
    </div>
  );
}
