import Info from "./Info";
import maps from "../../utils/assets/icon/maps.png";
import calendar from "../../utils/assets/icon/calendar.png";
import loud_speaker from "../../utils/assets/icon/loud-speaker.png";
const TheConference = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col  items-center">
        <h1 className=" font-poppins text-primary-blue font-bold text-2xl sm:text-lg">
          the Conference
        </h1>
        <hr
          className="bg-primary-yellow"
          style={{ width: "190px", height: "5px" }}
        ></hr>
      </div>

      <div className="flex flex-row justify-around">
        <Info
          title="Location"
          information="Kalimantan Institute of Technology Auditorium"
          icon={maps}
        />
        <Info
          title="Date and Time"
          information="September 29 -30, 2023
          07.00 AM - 05.00 PM"
          icon={calendar}
        />
        <Info
          title="Speakers"
          information="3 Professional Speakers"
          icon={loud_speaker}
        />
      </div>
    </div>
  );
};

export default TheConference;
