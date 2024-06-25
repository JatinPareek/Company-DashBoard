import GroupComponent1 from "../components/GroupComponent1";
import LineChartComponent from "../components/LineChartComponent";
import BarChartComponent from "../components/BarChartComponent";
import PieChartComponent from "../components/PieChartComponent";
import AreaChartComponent from "../components/AreaChartComponent";

const Analytics = () => {
  return (
    <div className="flex">
      <div className="w-[100px] bg-gray-300 flex-shrink-0">
        <GroupComponent1 />
      </div>
      <div className="p-8">
        <div className=" grid grid-cols-2 gap-8">
          <div className=" p-5 border-solid border-2 border-gray-100 border-opacity-0.5 rounded-lg hover:shadow-2xl ">
            <h2 className="text-xl font-semibold mb-3">Line Chart</h2>
            <LineChartComponent />
          </div>
          <div className="p-5 border-solid border-2 border-gray-100 border-opacity-0.5 rounded-lg hover:shadow-2xl">
            <h2 className="text-xl font-semibold mb-3">Bar Chart</h2>
            <BarChartComponent />
          </div>
          <div className="p-5 border-solid border-2 border-gray-100 border-opacity-0.5 rounded-lg hover:shadow-2xl">
            <h2 className="text-xl font-semibold mb-0">Pie Chart</h2>
            <PieChartComponent />
          </div>
          <div className="p-5 border-solid border-2 border-gray-100 border-opacity-0.5 rounded-lg hover:shadow-2xl">
            <h2 className="text-xl font-semibold mb-3">Area Chart</h2>
            <AreaChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
