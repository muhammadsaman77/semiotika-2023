import Button from "../button";
import FeeList from "./FeeList";
const Registration = () => {
  const onClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdnGEC8wRq6plZvezy6albXwhQeLYtvQN0vd0iehRYla4yMBw/viewform",
      "_blank"
    );
  };
  return (
    <>
      <div className="mb-20" id="registration">
        <h1 className="text-primary-blue font-bold font-poppins text-6xl text-center mb-7 sm:text-3xl sm:mb-3 ">
          Registration
        </h1>
        <p className="font-semibold font-nunito text-lg text-primary-blue mb-3 sm:text-base sm:pl-5 pl-20">
          To entry this event, you must fill the registration
        </p>
        <Button
          label="Registration"
          type="button"
          hover="no"
          onClick={onClick}
        />
        <p className="mt-7 mb-3 font-semibold font-nunito text-lg text-primary-blue sm:text-base sm:text-center pl-20">
          Information of Registration
        </p>
        <FeeList />
      </div>
    </>
  );
};
export default Registration;