const Topic = ({ logo, topics }) => {
  return (
    <div
      style={{ boxShadow: "1px 1px 25px rgba(0, 0, 0, 0.1)" }}
      className="rounded-md bg-mono-new-white flex flex-col items-center p-16 mb-10 "
    >
      <img className="mb-10 " src={logo} alt="" width="80px"></img>
      {topics.map((element) => (
        <h3 className="font-nunito font-semibold text-base text-primary-yellow">
          {element}
        </h3>
      ))}
    </div>
  );
};
export default Topic;
