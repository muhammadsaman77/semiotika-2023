import { Chrono } from "react-chrono";

const TimeLine = () => {
  const items = [
    {
      title: "August 9, 2023",
      cardTitle: "Submission",
    },
    {
      title: "August 30, 2023",
      cardTitle: "Accepted",
    },
    {
      title: "September 6, 2023",
      cardTitle: "Early Bird",
    },
    {
      title: "September 13, 2023",
      cardTitle: "Normal Bird",
    },
  ];
  return (
    <>
      <div id="timeline" className="ml-20 mt-10">
        <h1 className="text-primary-blue font-bold font-poppins text-6xl">
          Timeline
        </h1>
        <hr
          className="bg-primary-yellow"
          style={{ width: "150px", height: "5px" }}
        ></hr>
        <h2 className="font-nunito font-semibold text-primary-blue text-base mt-2">
          Here’s the timeline of SEMIOTIKA
        </h2>
        <div style={{ width: "1200px", height: "400px" }}>
          <Chrono items={items} />
        </div>
      </div>
    </>
  );
};
export default TimeLine;
