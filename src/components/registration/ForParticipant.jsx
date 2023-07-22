import Button from "../button";
import Fee from "./Fee";
const ForParticipant = () => {
  const onClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdnGEC8wRq6plZvezy6albXwhQeLYtvQN0vd0iehRYla4yMBw/viewform",
      "_blank"
    );
  };
  const participantList = [
    {
      partisipant: "Peserta Seminar",
      costList: [
        {
          name: "Online",
          cost: "FREE",
        },
      ],
      fasilitas: ["E-Certificate"],
    },
    {
      partisipant: "Peserta Workshop",
      costList: [
        {
          name: "Offline",
          cost: "IDR. 35 K",
        },
      ],
      fasilitas: ["E-Certificate", "Lunch Box"],
    },
  ];
  return (
    <>
      <div className="flex flex-wrap">
        <div className="">
          <p className="font-semibold font-nunito text-lg text-primary-blue mb-3 sm:text-base max-w-xl text-justify">
            To entry this event as Seminar & Workshop participant, you must fill
            registration below.
          </p>
          <Button
            label="Registration"
            type="button"
            hover="no"
            onClick={onClick}
          />
        </div>
        <span className="border-r-2 border-primary-blue mx-14"></span>
        <div className="">
          <p className=" mb-3 font-semibold font-nunito text-lg text-primary-blue sm:text-base sm:pl-0 sm:m-4">
            Information of Registration
          </p>
          <div className="flex flex-wrap gap-10 sm:gap-5">
            <Fee
              costList={participantList[0]["costList"]}
              partisipant={participantList[0]["partisipant"]}
              fasilitas={participantList[0]["fasilitas"]}
              type={participantList[0]["type"]}
            />
            <Fee
              costList={participantList[1]["costList"]}
              partisipant={participantList[1]["partisipant"]}
              fasilitas={participantList[1]["fasilitas"]}
              type={participantList[1]["type"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ForParticipant;
