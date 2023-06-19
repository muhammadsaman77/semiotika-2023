const Speaker = ({ src, title }) => {
  return (
    <>
      <div
        className="w-1/3"
        style={{
          backgroundImage: `url(${src})`,

          height: "500px",
          backgroundPosition: "center",
        }}
      >
        <span
          className="font-nunito text-mono-new-white font-semibold text-xl"
          style={{ position: "relative", top: "60vh", left: "2vw" }}
        >
          {title}
        </span>
      </div>
    </>
  );
};
export default Speaker;
