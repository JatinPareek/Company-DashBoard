import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent from "../components/FrameComponent";
import MessageContent from "../components/MessageContent";
import Profile from "../components/Profile";

const SourceFile = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] [row-gap:20px] mq1125:flex-wrap mq1125:pl-5 mq1125:pr-5 mq1125:box-border">
      <GroupComponent1 />
      <section className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[595px] max-w-full mq750:min-w-full">
        <FrameComponent />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-8 box-border max-w-full">
          <MessageContent />
        </div>
      </section>
      <div className="w-[425px] bg-lavender flex flex-row items-start justify-start pt-6 px-6 pb-8 box-border max-w-full mq750:pt-5 mq750:pb-[21px] mq750:box-border mq1125:flex-1">
        <div className="h-[900px] w-[425px] relative bg-lavender hidden max-w-full" />
        <Profile />
      </div>
    </div>
  );
};

export default SourceFile;
