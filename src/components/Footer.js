import instagram from "../utils/assets/icon/Instagram.png";
import gmail from "../utils/assets/icon/gmail.png";
const Footer = () => {
  return (
    <footer className="bg-primary-blue py-10 flex flex-row justify-around">
      <section>
        <h3 className="text-primary-yellow font-nunito font-semibold text-xl">
          Secretariat
        </h3>
        <p className="text-mono-white font-nunito font-bold text-xl">
          Jurusan Matematika dan Teknologi Informasi
        </p>

        <div className="flex flex-row items-center mt-3">
          <img src={instagram} alt="" width="20px"></img>
          <p className="pl-3 font-nunito text-lg text-mono-white">
            semiotika_itk
          </p>
        </div>
        <div className="flex flex-row items-center ">
          <img src={gmail} alt="" width="20px"></img>
          <p className="pl-3 font-nunito text-lg text-mono-white">
            semiotika@itk.ac.id
          </p>
        </div>
      </section>
      <section>
        <h3 className="mb-2 text-primary-yellow font-nunito font-semibold text-xl">
          Contact Person
        </h3>
        <p className="text-mono-white font-nunito font-normal text-lg">
          Khairunnisa Rahmah : +62-812-2452-0013
        </p>
        <p className="text-mono-white font-nunito font-normal text-lg">
          Luh Made Wisnu S : +62-851-7115-9915
        </p>
        <p className="text-mono-white font-nunito font-normal text-lg">
          Rizky Amelia : +62- 878-8902-7188
        </p>
      </section>
      {/* <section></section> */}
    </footer>
  );
};
export default Footer;
