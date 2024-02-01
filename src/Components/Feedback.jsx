"use client";
import React from "react";
import StarRating from "./StarRating";

function Feedback() {
  return (
    <>
      <main className="container mx-auto p-4 ">
        <div className="bg-white p-8 max-w-xl mx-auto rounded-md shadow-md  ">
          <div className="text-3xl font-bold mb-4 text-green-500">
            Feedback Form
          </div>
          <form className="max-w-full">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 "
              >
                Police Station Name
              </label>
              <input
                autoFocus
                type="text"
                className="form-input w-full under-label bg-gray-100 p-1"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="officerName"
                className="block text-sm font-semibold mb-2"
              >
                Officer Name/ID (if known)
              </label>
              <input
                type="text"
                className="form-input w-full under-label bg-gray-100 p-1"
                id="officerName"
                name="officerName"
                aria-describedby="officerNameHelp"
              />
              <small id="officerNameHelp" className="text-gray-500">
                Enter officer name or ID if known.
              </small>
            </div>

            <div className="mb-4">
              <label
                htmlFor="satisfaction"
                className="block text-sm font-semibold mb-2 "
              >
                Satisfaction with Interaction (Out of 5)
              </label>
              <select
                className="form-select w-full bg-gray-100 p-1"
                id="satisfaction"
                name="satisfaction"
                required
                aria-required="true"
              >
                <option value="5">5 - Very Satisfied</option>
                <option value="4">4 - Satisfied</option>
                <option value="3">3 - Neutral</option>
                <option value="2">2 - Dissatisfied</option>
                <option value="1">1 - Very Dissatisfied</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="respectfulTreatment"
                className="block text-sm font-semibold mb-2"
              >
                Respectful Treatment by Police
              </label>
              <div className="flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  id="respectYes"
                  name="respectfulTreatment"
                  value="Yes"
                  required
                />
                <label className="ml-2" htmlFor="respectYes">
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  id="respectNo"
                  name="respectfulTreatment"
                  value="No"
                  required
                />
                <label className="ml-2" htmlFor="respectNo">
                  No
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="communication"
                className="block text-sm font-semibold mb-2"
              >
                Clear and Effective Communication
              </label>
              <div className="flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  id="communicationYes"
                  name="communication"
                  value="Yes"
                  required
                />
                <label className="ml-2" htmlFor="communicationYes">
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  id="communicationNo"
                  name="communication"
                  value="No"
                  required
                />
                <label className="ml-2" htmlFor="communicationNo">
                  No
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="professionalConduct"
                className="block text-sm font-semibold mb-2"
              >
                Professional Conduct by Police
              </label>
              <div className="flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  id="professionalYes"
                  name="professionalConduct"
                  value="Yes"
                  required
                />
                <label className="ml-2" htmlFor="professionalYes">
                  Yes
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  id="professionalNo"
                  name="professionalConduct"
                  value="No"
                  required
                />
                <label className="ml-2" htmlFor="professionalNo">
                  No
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="suggestions"
                className="block text-sm font-semibold mb-2 "
              >
                Any Suggestions?
              </label>
              <textarea
                className="form-textarea w-full bg-gray-100 p-1"
                id="suggestions"
                name="suggestions"
                rows="3"
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="overallRating"
                className="block text-sm font-semibold mb-2"
              >
                Overall Experience Rating (Out of 5)
              </label>
              <StarRating
                onChange={(rating) => console.log("Selected Rating:", rating)}
              />
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className=" border-2 border-green-500  text-green-500 px-4 py-2 rounded mx-auto hover:bg-green-500 hover:text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Feedback;
