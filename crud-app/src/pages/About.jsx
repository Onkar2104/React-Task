const setupSteps = [
  {
    title: "Clone the repository",
    command: "git clone https://github.com/Onkar2104/React-Task.git",
  },
  {
    title: "Open the frontend directory",
    command: "cd React-Task/crud-app",
  },
  {
    title: "Install dependencies",
    command: "npm install",
  },
  {
    title: "Configure the API URL",
    command: "VITE_API_URL=http://127.0.0.1:8000",
  },
  {
    title: "Start the development server",
    command: "npm run dev",
  },
];

const features = [
  {
    title: "Read student data",
    description:
      "Student records are loaded from the API and displayed for both visitors and logged-in users.",
  },
  {
    title: "Create students",
    description:
      "Logged-in users can open the Add Student form and save a name, email, and course.",
  },
  {
    title: "Update and delete",
    description:
      "Update and Delete actions are visible to everyone, but require login before they can modify data.",
  },
  {
    title: "Authentication",
    description:
      "The login page supports registration and login requests through the /register and /login API endpoints.",
  },
  {
    title: "Session-aware navigation",
    description:
      "The navbar displays the logged-in user's name and provides a logout action.",
  },
  {
    title: "Responsive interface",
    description:
      "The UI uses Tailwind CSS utility classes for responsive layouts, forms, cards, and navigation.",
  },
];

function About() {
  return (
    <main className="min-h-screen bg-cyan-400 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="rounded-2xl bg-white p-6 shadow-lg sm:p-10">
          <p className="mb-2 font-semibold uppercase tracking-widest text-cyan-600">
            Project guide
          </p>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            React Task CRUD App
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-gray-600">
            A React and Vite frontend for managing student records through a
            FastAPI backend. The project demonstrates routing, authentication
            screens, API requests, and protected data actions.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-lg sm:p-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Getting started
          </h2>
          <div className="space-y-5">
            {setupSteps.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-2 font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-3 text-sm text-cyan-200">
                    <code>{step.command}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-lg bg-cyan-50 p-4 text-sm leading-6 text-gray-700">
            The FastAPI backend should be running at the URL configured in
            <code className="mx-1 rounded bg-cyan-100 px-1 py-0.5">
              VITE_API_URL
            </code>
            and should provide the student and authentication endpoints used
            by the frontend.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-lg sm:p-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Project functionality
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-gray-200 p-5"
              >
                <h3 className="mb-2 text-lg font-semibold text-blue-700">
                  {feature.title}
                </h3>
                <p className="leading-7 text-gray-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-lg sm:p-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Available commands
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["npm run dev", "Start the local development server."],
              ["npm run build", "Create a production build."],
            ].map(([command, description]) => (
              <div key={command} className="rounded-xl bg-gray-50 p-4">
                <code className="font-semibold text-blue-700">{command}</code>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
