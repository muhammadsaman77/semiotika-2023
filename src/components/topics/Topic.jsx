const Topic = ({ logo, topics }) => {
  return (
    <div
      style={{ boxShadow: "1px 1px 25px rgba(0, 0, 0, 0.1)" }}
      className="rounded-md bg-mono-new-white flex flex-col items-center p-16 mb-10 sm:p-10 sm:mb-8"
    >
      <img className="mb-10 w-20 sm:w-14" src={logo} alt="" width="80px"></img>
      {topics.map((element) => (
        <h3 className="font-nunito font-semibold text-base text-primary-yellow sm:text-sm">
          {element}
        </h3>
      ))}
    </div>
  );
};
export default Topic;
