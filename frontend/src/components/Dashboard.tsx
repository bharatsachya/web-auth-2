import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/authServices';

const Dashboard: React.FC<{ token: string }> = ({ token }) => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects(token);
      setProjects(data);
    };
    fetchProjects();
  }, [token]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Dashboard</h1>
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Projects</h2>
        {projects.length > 0 ? (
          <ul className="space-y-3">
            {projects.map((project) => (
              <li key={project.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
                <span className="font-medium text-gray-800">{project.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
