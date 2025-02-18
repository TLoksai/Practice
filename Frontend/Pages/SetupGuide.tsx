


const SetupGuide: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <div className="max-w-4xl text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">🚀 React Setup Guide</h1>
        <p className="text-lg text-gray-700 mb-6">
          Follow this comprehensive guide to set up your React project, install necessary packages, and configure your development environment.
        </p>
      </div>

      {/* Steps Section */}
      <div className="max-w-5xl bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">🌟 Step-by-Step Commands</h2>
        <ol className="list-decimal ml-8 text-gray-800 space-y-6">
          <li>
            <strong>Install Node.js:</strong> Ensure Node.js is installed on your system. Download it from{' '}
            <a
              href="https://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"  
              className="text-blue-600 hover:underline"  
            >
              the official Node.js website
            </a>.
            This will also install npm (Node Package Manager).
          </li>
          <li>
            <strong>Verify Installation:</strong> Run the following commands to check if Node.js and npm are installed:
            <pre className="bg-gray-100 text-black p-3 rounded-md mt-2 shadow-md">
              node -v
            </pre>
            <pre className="bg-gray-100 text-black p-3 rounded-md mt-2 shadow-md">
              npm -v
            </pre>
          </li>
          <li>
            <strong>Create a New React App:</strong> Use the following command to create a new React application:
            <pre className="bg-gray-100 text-black p-3 rounded-md mt-2 shadow-md">
              npx create-react-app my-app
            </pre>
            Replace <code>my-app</code> with your desired project name.
          </li>
          <li>
            <strong>Navigate to the Project Folder:</strong> Move into the newly created project folder:
            <pre className="bg-gray-100 text-black p-3 rounded-md mt-2 shadow-md">
              cd my-app
            </pre>
          </li>
          <li>
            <strong>Start the Development Server:</strong> Run the following command to start the server:
            <pre className="bg-gray-100 text-black p-3 rounded-md mt-2 shadow-md">
              npm start
            </pre>
            Your application will open in the browser at{' '}
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              http://localhost:3000
            </a>.
          </li>
          <li>
            <strong>Install Additional Packages:</strong> Use npm or yarn to add other dependencies as needed. For example:
            <pre className="bg-gray-100 text-black p-3 rounded-md mt-2 shadow-md">
              npm install react-router-dom
            </pre>
            or
            <pre className="bg-gray-100 text-black p-3 rounded-md mt-2 shadow-md">
              yarn add react-router-dom
            </pre>
          </li>
          <li>
            <strong>Install a CSS Framework (Optional):</strong> To add Tailwind CSS, run:
            <pre className="bg-gray-100 text-black p-3 rounded-md mt-2 shadow-md">
              npm install -D tailwindcss postcss autoprefixer
            </pre>
            Then initialize Tailwind:
            <pre className="bg-gray-100 text-black p-3 rounded-md mt-2 shadow-md">
              npx tailwindcss init
            </pre>
          </li>
          <li>
            <strong>Test Your Application:</strong> Open the app in your browser and verify the setup.
            Modify the <code>src/App.js</code> file to test changes.
          </li>
        </ol>
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-700 text-lg">
          🌈 Ready to build something amazing? Let’s get started!
        </p>
      </div>
    </div>
  );
};

export default SetupGuide;
