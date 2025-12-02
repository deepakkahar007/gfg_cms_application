import { LineChartComponent } from "@/components/admin/LineChartComp";
import StatsCard from "@/components/StatsCard";

const AdminPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 p-6">
        <StatsCard title="Total Users" value={1280} trend={12.5} />
        <StatsCard title="Total Blogs" value={342} trend={4.2} />
        <StatsCard title="Likes Received" value={5890} trend={9.1} />
        <StatsCard title="Comments Posted" value={2140} trend={7.8} />
      </div>
      <div className="flex flex-col w-full px-6">
        <LineChartComponent />
      </div>
    </>
  );
};

export default AdminPage;
