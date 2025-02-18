


const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-lg text-gray-200">
            Discover our mission, vision, values, and achievements that drive our commitment to excellence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mission Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-indigo-600 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c0-2.3 1.7-4 4-4s4 1.7 4 4-1.7 4-4 4h-1v3.2l-3-3V8zm0 0H9M3 4v16h5l7-7v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v6.2"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-4 text-lg text-gray-600">
              We are dedicated to providing outstanding education and fostering a community of scholars who are committed to lifelong learning, critical thinking, and the pursuit of knowledge.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-purple-600 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c0-2.3 1.7-4 4-4s4 1.7 4 4-1.7 4-4 4h-1v3.2l-3-3V8zm0 0H9M3 4v16h5l7-7v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v6.2"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            <p className="mt-4 text-lg text-gray-600">
              To be recognized as a global leader in education and research, inspiring students and faculty to reach their full potential and make meaningful contributions to society.
            </p>
          </div>

          {/* Values Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-green-600 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c0-2.3 1.7-4 4-4s4 1.7 4 4-1.7 4-4 4h-1v3.2l-3-3V8zm0 0H9M3 4v16h5l7-7v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v6.2"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
            <p className="mt-4 text-lg text-gray-600">
              Integrity, inclusivity, and innovation are at the heart of everything we do. We strive to create an environment that encourages collaboration, respect, and intellectual curiosity.
            </p>
          </div>

          {/* Achievements Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-red-600 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c0-2.3 1.7-4 4-4s4 1.7 4 4-1.7 4-4 4h-1v3.2l-3-3V8zm0 0H9M3 4v16h5l7-7v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v6.2"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Our Achievements</h3>
            <ul className="mt-4 text-lg text-gray-600 list-disc list-inside">
              <li>Ranked among the top institutions for research and education</li>
              <li>Home to award-winning faculty and groundbreaking research</li>
              <li>Strong partnerships with industry leaders and global institutions</li>
              <li>A vibrant alumni network making significant impacts worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
