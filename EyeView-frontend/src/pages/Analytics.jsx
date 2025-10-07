
import React from 'react';
import { useAnalyticsData } from '../hooks/useAnalyticsData';
import StatCard from '../components/StatCard';
import LoginTrendChart from '../components/LoginTrendChart';
import UserComparisonChart from '../components/UserComparisonChart';
import RecentLoginsTable from '../components/RecentLoginsTable';

// Import your existing LoadingSpinner component
import LoadingSpinner from '../components/LoadingSpinner';

const AnalyticsPage = () => {
  const { data, loading, error } = useAnalyticsData();

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><LoadingSpinner /></div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">Error fetching data: {error.message}</div>;
  }

  // A check for if data is empty or not in the expected format
  if (!data || !data.userSpecific || !data.global) {
  return <div className="text-white text-center mt-10">No analytics data available.</div>;
}

  // Format the last login date for display
  const lastLoginDate = data.userSpecific.lastLogin 
    ? new Date(data.userSpecific.lastLogin).toLocaleString() 
    : 'N/A';

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>

      {/* Stat Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Your Total Logins" value={data.userSpecific.loginCount} />
        <StatCard title="Total System Users" value={data.global.totalUsers} />
        <StatCard title="Active Users (Last 7 Days)" value={data.global.activeUsers} />
        <StatCard title="Your Last Login" value={lastLoginDate} />
      </div>

      {/* Charts and Table Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
            <LoginTrendChart data={data.global.loginTrend} />
        </div>
        <div>
            <UserComparisonChart data={{ userLogins: data.userSpecific.loginCount, ...data.global }} />
        </div>
        <div>
            <RecentLoginsTable data={data.userSpecific.recentLogins} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;