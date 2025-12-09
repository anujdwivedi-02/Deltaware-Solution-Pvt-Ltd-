import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center">
        <div className="text-xl font-medium font-fira-code text-mist flex items-center">
          <h1 className="pr-4 border-r-2 mr-4">404</h1>{" "}
          <p>This page could not be found.</p>
        </div>
        <p className="mt-4 text-lg text-mist font-poppins">
          You can return to the{" "}
          <a href="/" className="text-cyan-500 hover:underline">
            home page
          </a>
          .
        </p>
      </div>
    </div>
  );
}
