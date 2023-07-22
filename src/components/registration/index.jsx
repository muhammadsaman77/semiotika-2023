import { useState } from "react";
import ForParticipant from "./ForParticipant";
import ForPresenter from "./ForPresenter";
const Registration = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const participantButton =
    activeTab === 0 ? "text-primary-blue" : "text-primary-yellow";
  const presentButton =
    activeTab === 1 ? "text-primary-blue" : "text-primary-yellow";
  return (
    <>
      <div
        className="mb-20 sm:mb-10 pl-20 pr-10 pt-10 sm:pl-10"
        id="registration"
      >
        <h1 className="text-primary-blue font-bold font-poppins text-6xl text-center mb-7 sm:text-3xl sm:mb-3 ">
          Registration
        </h1>
        <div>
          <div className="font-nunito font-semibold text-lg my-3 ">
            <button
              onClick={() => handleTabClick(0)}
              className={participantButton}
            >
              For Partisipant
            </button>
            <span className="border-r-2 border-slate-500 mx-2"></span>
            <button onClick={() => handleTabClick(1)} className={presentButton}>
              For Presenter
            </button>
          </div>
          <div>
            {activeTab === 0 && <ForParticipant />}
            {activeTab === 1 && <ForPresenter />}
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration;
