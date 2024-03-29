import Button from "../button";
import pemakalah from "../../utils/assets/video/pemakalah.mp4";
import Fee from "./Fee";
const ForPresenter = () => {
  const onClick = () => {
    window.open("https://forms.gle/ag6wRbKYXfaoQasg6", "_blank");
  };
  const presenterList = [
    {
      partisipant: "Pemakalah Umum",
      type: "Hybrid",
      costList: [
        {
          name: "Online",
          cost: "IDR. 200 K",
        },
        {
          name: "Offline",
          cost: "IDR. 275 K",
        },
      ],
      fasilitas: [
        "E-Certificate",
        "Seminar Kit (Offline)",
        "Lunch Box (Offline)",
        "Publish E-Journal (Selected Paper)",
      ],
    },
    {
      partisipant: "Pemakalah Mahasiswa",
      costList: [
        {
          name: "Online",
          cost: "IDR. 150 K",
        },
        {
          name: "Offline",
          cost: "IDR. 225 K",
        },
      ],
      fasilitas: [
        "E-Certificate",
        "Seminar Kit (Offline)",
        "Lunch Box (Offline)",
        "Publish E-Journal (Selected Paper)",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-wrap">
        <div>
          <p className="font-semibold font-nunito text-lg text-primary-blue mb-3 sm:text-base max-w-xl sm:text-justify">
            To entry this event as presenter (pemakalah), you must fill
            submission below.
          </p>
          <Button
            label="Submission"
            type="button"
            hover="no"
            onClick={onClick}
          />
          <p className="mt-3 mb-4 font-semibold font-nunito text-lg text-primary-blue sm:text-base sm:pl-0 sm:m-4">
            Information of Registration
          </p>
          <div className="flex flex-wrap gap-10 sm:gap-5">
            <Fee
              costList={presenterList[0]["costList"]}
              partisipant={presenterList[0]["partisipant"]}
              fasilitas={presenterList[0]["fasilitas"]}
              type={presenterList[0]["type"]}
            />
            <Fee
              costList={presenterList[1]["costList"]}
              partisipant={presenterList[1]["partisipant"]}
              fasilitas={presenterList[1]["fasilitas"]}
              type={presenterList[1]["type"]}
            />
          </div>
        </div>
        <span className="border-r-2 border-primary-blue mx-20"></span>
        <div>
          <h2 className="text-lg text-primary-blue font-semibold border-primary-yellow border-b-2 inline-block mb-3">
            Related Videos
          </h2>
          <video width={240} controls>
            <source src={pemakalah} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};
export default ForPresenter;
