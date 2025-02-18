


const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Main Wrapper Div */}
      {/* Hero Section */}
      <div className="max-w-3xl text-center bg-white bg-opacity-75 p-8 rounded-lg shadow-lg mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Keep Practicing</h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Dedication and practice make perfect! Keep honing your skills and exploring new horizons. Every small step you take adds up to a big achievement.
        </p>
        {/* Image for "Keep Practicing" */}
        <div className="mt-8">
          <img
            src="src/assets/practice good laptop hygiene1692739457071537.avif" // Replace with the correct image path
            alt="Practice Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="max-w-5xl text-center bg-white bg-opacity-75 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started with React</h2>
        <p className="text-lg text-gray-700 mb-6">
          Follow these steps to set up and start your React project from scratch:
        </p>
        <div className="text-left bg-gray-100 p-6 rounded-lg">
          <ol className="list-decimal ml-8 text-gray-800 space-y-4">
            <li>
              <strong>Install Node.js:</strong> Make sure you have Node.js installed on your system. You can download it from{' '}
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                the official Node.js website
              </a>
              .
            </li>
            <li>
              <strong>Install npm or yarn:</strong> Node.js comes with npm (Node Package Manager). Alternatively, you can install{' '}
              <a
                href="https://yarnpkg.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Yarn
              </a>
              .
            </li>
            <li>
              <strong>Create a React App:</strong> Open your terminal and run the following command to create a new React project:
              <pre className="bg-gray-200 text-black p-3 rounded-md mt-2">
                npx create-react-app my-app
              </pre>
              Replace <code>my-app</code> with your desired project name.
            </li>
            <li>
              <strong>Navigate to the Project Folder:</strong> Use the following command to move into the project directory:
              <pre className="bg-gray-200 text-black p-3 rounded-md mt-2">
                cd my-app
              </pre>
            </li>
            <li>
              <strong>Start the Development Server:</strong> Run this command to start the development server:
              <pre className="bg-gray-200 text-black p-3 rounded-md mt-2">
                npm start
              </pre>
              The app will open in your default web browser at{' '}
              <a
                href="http://localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                http://localhost:3000
              </a>
              .
            </li>
            <li>
              <strong>Edit the Code:</strong> Open the project in your code editor (e.g., VS Code) and start editing the <code>src</code> folder to see changes in real-time.
            </li>
          </ol>
        </div>
      </div>

      {/* Other Sections */}
      {/* (Existing Welcome, Features, and Testimonials Sections remain unchanged) */}

      {/* Footer Section */}
      
    </div>
  );
};

export default Home;
