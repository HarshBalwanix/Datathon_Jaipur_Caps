import React from "react";

const RegisteredFIR = ({ firNumber, date }) => {
  return (
    <div className="bg-white p-4 mb-4 max-w-md mx-auto rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2 text-green-500">
        Registered FIR Status
      </h2>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">FIR Number:</p>
          <p>{firNumber}</p>
        </div>
        <div>
          <p className="font-semibold">Date:</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default RegisteredFIR;
