import React from 'react';

const jobs = [
  { title: 'Lead User Experience Designer', location: 'Bangalore', positionsLeft: 2 },
  { title: 'HR Manager', location: 'Bangalore', positionsLeft: 1 },
  { title: 'Business Analyst', location: 'Bangalore', positionsLeft: 7 },
  { title: 'Business Analyst', location: 'Bangalore', positionsLeft: 7 },
  { title: 'Business Analyst', location: 'Bangalore', positionsLeft: 7 },
];

const JobList: React.FC = () => {
  return (
    <div>
      <h2>My Jobs</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
            <p>{job.positionsLeft} positions left</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
