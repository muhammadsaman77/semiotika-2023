import itk from "../..//utils/assets/img/itk.jpeg";

const About = () => {
  return (
    <>
      <section className="pt-16 container sm:pt-5">
        <div
          id="about"
          className="flex flex-wrap pl-20 pr-14 justify-between sm:pl-10"
        >
          <section className="w-1/3 flex flex-col items-start sm:w-full">
            <div className="flex flex-col items-center ">
              <h1 className="font-poppins font-bold text-primary-blue text-6xl sm:text-3xl">
                About
              </h1>
              <h2 className="font-poppins font-bold text-primary-blue text-2xl sm:text-base">
                SEMIOTIKA
              </h2>
              <hr
                className="bg-primary-yellow"
                style={{ width: "130px", height: "5px" }}
              ></hr>
            </div>

            <p className="text-justify font-nunito text-lg text-primary-blue mt-10 max-w-md sm:text-sm sm:mt-5">
              "Seminar Nasional Teknologi Informasi dan Matematika atau
              disingkat SEMIOTIKA adalah ajang pelatihan seputar data science
              dan seminar nasional teknologi informasi dan matematika yang
              bertemakan “Peran Matematika dan Teknologi Informasi dalam
              Mengoptimalkan Pengelolaan Bisnis di ERA 5.0”
            </p>
          </section>
          <section className="flex flex-col items-end mt-10">
            <div className="w-80 mb-5">
              <p className="font-nunito text-primary-blue text-end text-sm">
                Who's managing?
              </p>
              <p className="font-nunito text-primary-blue font-bold text-end text-lg sm:text-base ">
                Jurusan Matematika dan Teknologi
                <span className="block">Institut Teknologi Kalimantan</span>
              </p>
            </div>
            <img className="rounded-md" src={itk} width="800px" alt=""></img>
          </section>
        </div>
      </section>
    </>
  );
};

export default About;
