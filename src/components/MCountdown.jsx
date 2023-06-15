import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <div className="font-nunito text-mono-white text-xl mb-5">
        {" "}
        Lets gooo !
      </div>
    );
  }
  return (
    <div className="flex flex-row font-nunito text-mono-white mb-5  ">
      <div className="flex flex-col mr-10">
        <span className="text-2xl">{days}</span>
        <span className="text-xs">Days</span>
      </div>
      <div className="flex flex-col mr-10">
        <span className="text-2xl">{hours}</span>
        <span className="text-xs">Hours</span>
      </div>
      <div className="flex flex-col mr-10">
        <span className="text-2xl">{minutes}</span>
        <span className="text-xs">Minutes</span>
      </div>
      <div className="flex flex-col mr-10">
        <span className="text-2xl">{seconds}</span>
        <span className="text-xs">Seconds</span>
      </div>
    </div>
  );
};
const MCountdown = () => {
  return (
    <Countdown
      date={new Date("September 29, 2023 00:00:00")}
      renderer={renderer}
    />
  );
};
export default MCountdown;
