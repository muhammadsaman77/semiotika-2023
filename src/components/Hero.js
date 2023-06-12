import landing from "../utils/assets/img/landing_backdrop.jpg";
const Hero = () => {
  return (
    <div className="flex">
      <section
        style={{
          width: "38vw",

          background:
            "linear-gradient(180.03deg, #0038C7 12.27%, #002FA8 35.87%, #002FA9 58.01%, #002687 99.98%)",
        }}
      >
        <h1>SEMIOTIKA 2023</h1>
      </section>
      <section
        style={{
          width: "62vw",
        }}
      >
        <img src={landing} alt="as"></img>
      </section>
    </div>
  );
};

export default Hero;
