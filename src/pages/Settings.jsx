import GroupComponent1 from "../components/GroupComponent1";

const Settings = () => {
  return (
    <div className="flex">
      <div className="w-[100px] bg-gray-300 flex-shrink-0">
        <GroupComponent1 />
      </div>
      <div className="flex-grow p-5">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
    </div>
  );
};

export default Settings;
