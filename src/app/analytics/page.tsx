"use client";

import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const AnalyticsDashboard = () => {
  const kpiData = [
    { title: "Total Bookings", value: "1,234", change: "+8.5%", changeType: "positive" },
    { title: "Total Revenue", value: "$56,789", change: "+12.3%", changeType: "positive" },
    { title: "Active Users", value: "3,456", change: "-2.1%", changeType: "negative" },
  ];

  const revenueData = [
    { name: "Jan", revenue: 12000 },
    { name: "Feb", revenue: 15000 },
    { name: "Mar", revenue: 10000 },
    { name: "Apr", revenue: 18000 },
    { name: "May", revenue: 14000 },
    { name: "Jun", revenue: 20000 },
    { name: "Jul", revenue: 17000 },
  ];

  const bookingsData = [
    { name: "Jan", bookings: 300 },
    { name: "Feb", bookings: 450 },
    { name: "Mar", bookings: 250 },
    { name: "Apr", bookings: 500 },
    { name: "May", bookings: 400 },
    { name: "Jun", bookings: 600 },
    { name: "Jul", bookings: 550 },
  ];

  const pieData = [
    { name: "Sedans", value: 40 },
    { name: "SUVs", value: 30 },
    { name: "Luxury Cars", value: 15 },
    { name: "Economy Cars", value: 15 },
  ];

  const COLORS = ["#6366F1", "#F59E0B", "#10B981", "#EF4444"];

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">Car Rental Analytics Dashboard</h1>

      {/* KPIs Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {kpiData.map((kpi) => (
          <KpiCard key={kpi.title} kpi={kpi} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ChartCard title="Monthly Revenue" description="Track your monthly revenue from car rentals.">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#6366F1" name="Revenue ($)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Monthly Bookings" description="Monitor the number of car bookings per month.">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={bookingsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="bookings" stroke="#F59E0B" strokeWidth={2} name="Bookings" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Pie Chart Section */}
      <div className="mt-12 flex justify-center">
        <PieChartCard data={pieData} colors={COLORS} />
      </div>
    </div>
  );
};

// KPI Card Component
const KpiCard = ({ kpi }: { kpi: { title: string; value: string; change: string; changeType: string } }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
      <h2 className="text-lg font-medium text-gray-600">{kpi.title}</h2>
      <p className="text-3xl font-bold text-gray-900 mt-3">{kpi.value}</p>
      <p className={`text-sm mt-2 ${kpi.changeType === "positive" ? "text-emerald-600" : "text-rose-600"}`}>
        {kpi.change}
      </p>
    </div>
  );
};

// Chart Card Component (Reusable for Bar and Line Charts)
const ChartCard = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5">{title}</h2>
      <p className="text-sm text-gray-500 mb-6">{description}</p>
      {children}
    </div>
  );
};

// Pie Chart Card Component
const PieChartCard = ({ data, colors }: { data: Array<{ name: string; value: number }>; colors: string[] }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 w-full max-w-2xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Bookings by Car Type</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            nameKey="name"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsDashboard;