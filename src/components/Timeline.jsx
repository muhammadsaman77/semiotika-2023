import { Chrono } from "react-chrono";

const TimeLine = () => {
  const items = [
    {
      title: "June 7 - August 9 2023",
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
      <div id="timeline" className=" mt-20 ">
        <h1 className="ml-20 text-primary-blue font-bold font-poppins text-6xl">
          Timeline
        </h1>
        <hr
          className="ml-20 bg-primary-yellow"
          style={{ width: "150px", height: "5px" }}
        ></hr>
        <h2 className="ml-20 font-nunito font-semibold text-primary-blue text-base mt-2">
          Here’s the timeline of SEMIOTIKA
        </h2>
        <div className=" mt-5 " style={{ width: "95vw", height: "400px" }}>
          <Chrono
            items={items}
            mode="VERTICAL"
            cardHeight={30}
            hideControls={true}
          />
        </div>
      </div>
    </>
  );
};
export default TimeLine;
