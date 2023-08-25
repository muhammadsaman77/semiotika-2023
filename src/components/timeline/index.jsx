import { Chrono } from "react-chrono";

const TimeLine = () => {
  const items = [
    {
      title: "July 17 - September 10 2023",
      cardTitle: "Submission",
      style: {
        height: "300px",
      },
    },
    {
      title: "September 18, 2023",
      cardTitle: "Accepted",
    },
    {
      title: "September 18 - 22, 2023",
      cardTitle:
        "Payment \n(The payment technique will be informed via email/WAG after the announcement is accepted)",
    },
    {
      title: "September 29, 2023",
      cardTitle: "Workshop",
    },
    {
      title: "September 30, 2023",
      cardTitle: "Seminar",
    },
  ];
  return (
    <>
      <div id="timeline" className=" mt-20 sm:mt-10">
        <h1 className="ml-20 sm:ml-10 text-primary-blue font-bold font-poppins text-6xl sm:text-3xl">
          Timeline
        </h1>
        <hr
          className="ml-20 sm:ml-10 bg-primary-yellow"
          style={{ width: "150px", height: "5px" }}
        ></hr>
        <h2 className="ml-20 sm:ml-10 font-nunito font-semibold text-primary-blue text-base mt-2 sm:text-sm">
          Here’s the timeline of SEMIOTIKA
        </h2>
        <div className=" mt-5 " style={{ width: "100%", height: "80%" }}>
          <Chrono
            items={items}
            mode="VERTICAL"
            cardHeight="5rem"
            hideControls={true}
          />
        </div>
      </div>
    </>
  );
};
export default TimeLine;
