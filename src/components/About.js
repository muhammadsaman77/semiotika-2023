import itk from "../utils/assets/img/itk.jpeg";

const About = () => {
  return (
    <div className="flex flex-row  mt-10">
      <section className="w-1/3">
        <h1 className="font-poppins font-bold text-primary-blue text-6xl">
          About
        </h1>
        <h2 className="font-poppins font-bold text-primary-blue text-2xl">
          SEMIOTIKA
        </h2>
        <p className="text-justify font-nunito text-lg">
          "Seminar Nasional Teknologi Informasi dan Matematika atau disingkat
          SEMIOTIKA adalah ajang pelatihan seputar data science dan seminar
          nasional teknologi informasi dan matematika yang bertemakan “Peran
          Matematika dan Teknologi Informasi dalam Mengoptimalkan Pengelolaan
          Bisnis di ERA 5.0”
        </p>
      </section>
      <section>
        <p className="font-nunito text-primary-blue">Who's managing?</p>
        <p className="font-nunito text-primary-blue font-bold">
          Jurusan Matematika dan Teknologi Institut Teknologi Kalimantan
        </p>
        <img src={itk} width="900px" alt=""></img>
      </section>
    </div>
  );
};

export default About;
