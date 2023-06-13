const Info = ({ title, information, icon }) => {
  return (
    <div className="flex flex-col items-center w-60 mt-10">
      <div className="flex flex-row items-center">
        <img src={icon} alt="icon"></img>
        <p className="ml-1 text-center font-nunito text-primary-blue font-semibold text-base">
          {title}
        </p>
      </div>
      <p className="text-center font-nunito text-primary-blue font-extrabold text-xl">
        {information}
      </p>
    </div>
  );
};
export default Info;
