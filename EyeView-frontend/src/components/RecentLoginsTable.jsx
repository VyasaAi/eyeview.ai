import React from 'react';


const RecentLoginsTable = ({ data: recentLogins }) => {
  
  
  if (!recentLogins || recentLogins.length === 0) {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-full">
        <h3 className="text-white text-xl font-bold mb-4">Recent Logins</h3>
        <div className="flex items-center justify-center h-4/5">
          <p className="text-gray-400">No recent login activity found.</p>
        </div>
      </div>
    );
  }

  
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-white text-xl font-bold mb-4">Recent Logins</h3>
      
      {/* This container makes the table scroll horizontally on small screens */}
      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-3 text-sm font-semibold uppercase text-gray-300 tracking-wider">#</th>
              <th className="p-3 text-sm font-semibold uppercase text-gray-300 tracking-wider">Date & Time</th>
              <th className="p-3 text-sm font-semibold uppercase text-gray-300 tracking-wider">IP Address</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {/* We map over the login data to create a row for each entry */}
            {recentLogins.map((login, index) => (
              <tr key={login.id || index} className="hover:bg-gray-700 transition-colors duration-200">
                <td className="p-3 text-gray-300">{index + 1}</td>
                <td className="p-3 text-gray-200 whitespace-nowrap">
                  {/* Format the timestamp into a readable local date and time */}
                  {new Date(login.timestamp).toLocaleString()}
                </td>
                <td className="p-3 text-gray-200 font-mono">
                  {login.ipAddress}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentLoginsTable;