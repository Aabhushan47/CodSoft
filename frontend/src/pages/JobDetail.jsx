// import Button from "@/components/ui/button";

export default function JobDetail({ title }) {
  return (
    <>
      <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Senior Frontend Engineer</h1>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Acme Inc</span>

                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-bold">Job Description</h2>
              <p className="mt-4 text-sm text-gray-600">
                We are looking for an experienced frontend engineer to join our
                growing team. You will be responsible for building and
                maintaining our web application, as well as collaborating with
                the design and backend teams.
              </p>
              <h2 className="mt-6 text-lg font-bold">Responsibilities</h2>
              <ul className="mt-4 list-disc pl-6 text-sm text-gray-600">
                <li>
                  Develop and maintain the frontend of our web application
                </li>
                <li>
                  Collaborate with the design and backend teams to ensure a
                  seamless user experience
                </li>
                <li>
                  Optimize the application for performance and scalability
                </li>
                <li>
                  Stay up-to-date with the latest frontend technologies and best
                  practices
                </li>
              </ul>
              <h2 className="mt-6 text-lg font-bold">Requirements</h2>
              <ul className="mt-4 list-disc pl-6 text-sm text-gray-600">
                <li>5+ years of experience in frontend development</li>
                <li>Proficient in HTML, CSS, and JavaScript</li>
                <li>
                  Experience with modern frontend frameworks and libraries
                  (e.g., React, Angular, Vue.js)
                </li>
                <li>Strong problem-solving and critical thinking skills</li>
                <li>Excellent communication and collaboration skills</li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-200 px-6 py-4 rounded-b-lg">
            <div className="flex justify-end">
              <a
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600"
                href="#"
              >
                Apply
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
