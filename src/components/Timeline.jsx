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
      <div id="timeline" className=" mt-10 ">
        <h1 className=" ml-20 text-primary-blue font-bold font-poppins text-6xl">
          Timeline
        </h1>
        <hr
          className="ml-20 bg-primary-yellow"
          style={{ width: "150px", height: "5px" }}
        ></hr>
        <h2 className="ml-20 font-nunito font-semibold text-primary-blue text-base mt-2">
          Here’s the timeline of SEMIOTIKA
        </h2>
        <div style={{ width: "500px", height: "450px", margin: "0 auto" }}>
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            cardWidth={100}
            cardHeight={70}
            hideControls={true}
          />
        </div>
      </div>
    </>
  );
};
export default TimeLine;
