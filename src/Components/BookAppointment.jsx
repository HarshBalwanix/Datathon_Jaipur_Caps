"use client";
import React, { useState } from "react";

function BookAppointment() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Date:", selectedDate);
    console.log("Time:", selectedTime);
  };

  return (
    <>
      <main className="container mx-auto p-4">
        <div className="bg-white p-8 max-w-xl mx-auto rounded-md shadow-md">
          <div className="text-3xl font-bold mb-4 text-green-500">
            Book Appointment to Register your FIR
          </div>
          <form className="max-w-full" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="pinCode"
                className="block text-sm font-semibold mb-2"
              >
                Enter your Pin Code
              </label>
              <input
                autoFocus
                type="text"
                className="form-input w-full under-label bg-gray-100 p-1"
                id="pinCode"
                name="pinCode"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="policeStation"
                className="block text-sm font-semibold mb-2"
              >
                Select your Police Station
              </label>
              <select
                className="form-select w-full bg-gray-100 p-1"
                id="policeStation"
                name="policeStation"
                required
                aria-required="true"
              >
                <option value="policeStation1">Police Station 1</option>
                <option value="policeStation2">Police Station 2</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-sm font-semibold mb-2"
              >
                Select Date
              </label>
              <input
                type="date"
                className="form-input w-full under-label bg-gray-100 p-1"
                id="date"
                name="date"
                value={selectedDate}
                onChange={handleDateChange}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="time"
                className="block text-sm font-semibold mb-2"
              >
                Select Time
              </label>
              <input
                type="time"
                className="form-input w-full under-label bg-gray-100 p-1"
                id="time"
                name="time"
                value={selectedTime}
                onChange={handleTimeChange}
                required
              />
            </div>

            <div className="flex items-center">
              <button
                type="submit"
                className="border-2 border-green-500 text-green-500 px-4 py-2 rounded mx-auto hover:bg-green-500 hover:text-white"
              >
                Create Appointment
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default BookAppointment;
