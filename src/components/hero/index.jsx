import landing_backdrop from "../../utils/assets/img/landing_backdrop.jpg";
import Button from "../button/index";
import MCountdown from "./MCountdown";
const Landing = () => {
  const onClick = () => {
    window.open(
      "https://journal.itk.ac.id/index.php/semiotika/login",
      "_blank"
    );
  };
  return (
    <section className="container">
      <div className="flex flex-wrap">
        <div
          style={{
            background:
              "linear-gradient(180.03deg, #0038C7 12.27%, #002FA8 35.87%, #002FA9 58.01%, #002687 99.98%)",
          }}
          className="w-1/3 sm:w-full h-auto"
        >
          <div
            className="ml-20 mt-40 sm:mt-16 sm:ml-10 relative sm:pb-5"
            style={{ width: "600px" }}
          >
            <h1 className="font-poppins font-extrabold text-mono-white text-8xl sm:text-4xl">
              SEMIOTIKA 2023
            </h1>
            <hr
              className="bg-primary-yellow"
              style={{ width: "225px", height: "5px" }}
            ></hr>
            <p className="font-nunito text-mono-white sm:text-sm mt-3 mb-3 max-w-sm">
              Peran Matematika dan Teknologi Informasi dalam Mengoptimalkan
              Pengelolaan Bisnis di ERA 5.0
            </p>
            <MCountdown />
            <Button label="Submission" type="button" onClick={onClick} />
          </div>
        </div>
        <div className="w-2/3 sm:w-full h-auto">
          <div className=" relative -z-10">
            <img
              className="h-full w-full"
              src={landing_backdrop}
              alt="Foto Landing"
            />
            <div
              className="absolute text-mono-white font-nunito bg-primary-yellow inline-block px-5 py-1 rounded-md opacity-100"
              style={{
                bottom: "20px",
                right: "20px",
              }}
            >
              <span className="font-semibold text-sm text-right block sm:text-xs">
                Save the Date
              </span>
              <span className="font-bold text-base text-right sm:text-sm">
                September 29 - 30, 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
