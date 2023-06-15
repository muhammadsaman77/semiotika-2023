import landing_backdrop from "../utils/assets/img/landing_backdrop.jpg";
import Button from "./Button";
import MCountdown from "./MCountdown";
const Landing = () => {
  return (
    <div className="flex" style={{ height: "650px" }}>
      <section
        style={{
          width: "38vw",

          background:
            "linear-gradient(180.03deg, #0038C7 12.27%, #002FA8 35.87%, #002FA9 58.01%, #002687 99.98%)",
        }}
      >
        <div className="ml-20 mt-40 relative " style={{ width: "600px" }}>
          <h1 className="font-poppins font-extrabold text-mono-white text-8xl">
            SEMIOTIKA 2023
          </h1>
          <hr
            className="bg-primary-yellow"
            style={{ width: "225px", height: "5px" }}
          ></hr>
          <p className="font-nunito text-mono-white text-base mt-3 mb-3">
            Peran Matematika dan Teknologi Informasi dalam Mengoptimalkan
            Pengelolaan Bisnis di ERA 5.0
          </p>
          <MCountdown />
          <Button label="Submission" type="button" />
        </div>
      </section>
      <section
        style={{
          width: "62vw",
          backgroundImage: `url(${landing_backdrop})`,
          backgroundSize: "cover",
        }}
      >
        <div
          className=" text-mono-white font-nunito bg-primary-yellow inline-block px-5 py-1 rounded-md opacity-100"
          style={{
            position: "relative",
            top: "585px",
            left: "695px",
          }}
        >
          <p className="font-semibold text-sm text-right">Save the Date</p>
          <p className="font-bold text-base text-right">
            September 29 - 30, 2023
          </p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
