const Speaker = ({ src, title }) => {
  return (
    <>
      <div
        className="w-1/3"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 38, 135, 0.5), rgba(0, 38, 135, 0.5)), url(${src})`,
          height: "600px",
          backgroundPosition: "top",
        }}
      >
        <span
          className="font-nunito text-mono-new-white font-semibold text-2xl"
          style={{ position: "relative", top: "73vh", left: "4vw" }}
        >
          {title}
        </span>
      </div>
    </>
  );
};
export default Speaker;
