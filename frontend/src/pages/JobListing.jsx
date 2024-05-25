// src/pages/JobListing.js
import React from "react";
import JobCard from "../components/Jobcard";

function JobListing() {
  return (
    <div className="bg-white text-gray-800 p-4">
      {" "}
      {/* Adjusted background and text color */}
      <div className="flex">
        {/* Sidebar for Filters */}
        <div className="w-1/4 p-4 bg-gray-200 rounded-lg">
          {" "}
          {/* Adjusted sidebar background color */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                {/* <Button>search</Button> */}
              </span>
            </div>

            <h3 className="text-lg font-bold mb-2">Job Type</h3>
            <ul className="mb-6">
              <li className="flex items-center mb-1">
                <input
                  type="checkbox"
                  className="mr-2 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <span>Full-Time</span>
              </li>
              <li className="flex items-center mb-1">
                <input
                  type="checkbox"
                  className="mr-2 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <span>Part-Time</span>
              </li>
              <li className="flex items-center mb-1">
                <input
                  type="checkbox"
                  className="mr-2 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <span>Contract</span>
              </li>
              <li className="flex items-center mb-1">
                <input
                  type="checkbox"
                  className="mr-2 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <span>Internship</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold mb-2">Salary Range</h3>
            <ul className="mb-6">
              <li className="flex items-center mb-1">
                <input
                  type="checkbox"
                  className="mr-2 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <span>$50,000 - $75,000</span>
              </li>
              <li className="flex items-center mb-1">
                <input
                  type="checkbox"
                  className="mr-2 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <span>$75,000 - $100,000</span>
              </li>
              <li className="flex items-center mb-1">
                <input
                  type="checkbox"
                  className="mr-2 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <span>$100,000+</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold mb-2">Remote Work</h3>
            <ul>
              <li className="flex items-center mb-1">
                <input
                  type="checkbox"
                  className="mr-2 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <span>Remote</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main content for Job Cards */}
        <div className="w-3/4 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <JobCard
              title="Software Engineer"
              company="Acme Inc"
              location="San Francisco, CA"
              type="Full-Time"
              description="We are looking for an experienced software engineer to join our growing team. You will be responsible for building and maintaining our web application."
            />
            <JobCard
              title="Marketing Manager"
              company="Acme Corp"
              location="Remote"
              type="Full-Time"
              description="We are seeking a talented marketing manager to lead our digital marketing efforts. You will be responsible for developing and executing marketing campaigns."
            />
            <JobCard
              title="Data Analyst"
              company="Acme Inc"
              location="New York, NY"
              type="Contract"
              description="We are looking for a data analyst to join our team and help us make data-driven decisions. You will be responsible for analyzing data and creating reports."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobListing;
