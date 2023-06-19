import Button from "./Button";
import FeeList from "./FeeList";

const Registration = () => {
  return (
    <>
      <div className="px-20" id="registration">
        <h1 className="text-primary-blue font-bold font-poppins text-6xl text-center">
          Registration
        </h1>
        <p className="font-semibold font-nunito text-lg text-primary-blue">
          To entry this event, you must fill the registration
        </p>
        <Button label="Registration" type="button" hover="no" />
        <p className="font-semibold font-nunito text-lg text-primary-blue">
          Information of Registration
        </p>
        <FeeList />
      </div>
    </>
  );
};
export default Registration;
