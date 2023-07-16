const Fee = (props) => {
  return (
    <>
      <div
        style={{
          boxShadow: "1px 1px 25px rgba(0, 0, 0, 0.15)",
        }}
        className="font-nunito  text-lg text-primary-blue  pt-5 px-7 border-primary-yellow border-2 border-dashed  h-72 w-64 rounded text-center sm:h-60"
      >
        <h1 className="font-bold text-lg sm:text-base">{props.partisipant}</h1>
        {/* <h2 className="font-semibold text-sm text-right">{props.type}</h2> */}
        {props.costList.map((e) => (
          <div>
            <h2 className="font-semibold text-sm text-left">{e["name"]}</h2>
            <h3 className="bg-primary-yellow rounded font-extrabold text-mono-white text-lg sm:font-bold sm:text-base">
              {e["cost"]}
            </h3>
          </div>
        ))}

        {props.fasilitas.map((e) => (
          <h4 className="font-semibold text-base mt-1 sm:text-sm">{e}</h4>
        ))}
      </div>
    </>
  );
};
export default Fee;
