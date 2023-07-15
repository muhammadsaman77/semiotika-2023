import instagram from "../../utils/assets/icon/Instagram.png";
import gmail from "../../utils/assets/icon/gmail.png";
const Footer = () => {
  return (
    <>
      <footer id="contact" className="bg-primary-blue py-10  sm:py-7 sm:px-3">
        <div className=" flex flex-row justify-around">
          <section>
            <h3 className="text-primary-yellow font-nunito font-semibold text-xl sm:text-base">
              Secretariat
            </h3>
            <p className="text-mono-white font-nunito font-bold text-xl sm:text-sm">
              Jurusan Matematika dan Teknologi Informasi
            </p>

            <div className="flex flex-row items-center mt-3">
              <img src={instagram} alt="" className="w-5 sm:w-4"></img>
              <p className="pl-3 font-nunito text-lg text-mono-white sm:text-sm">
                semiotika_itk
              </p>
            </div>
            <div className="flex flex-row items-center ">
              <img src={gmail} alt="" className="w-5 sm:w-4"></img>
              <p className="pl-3 font-nunito text-lg text-mono-white sm:text-sm">
                semiotika@itk.ac.id
              </p>
            </div>
          </section>
          <section className="sm:w-2/3">
            <h3 className="mb-2 text-primary-yellow font-nunito font-semibold text-xl sm:text-base">
              Contact Person
            </h3>
            <p className="text-mono-white font-nunito font-normal text-lg sm:text-xs">
              Khairunnisa Rahmah :{" "}
              <span className="sm:block">+62-812-2452-0013</span>
            </p>
            <p className="text-mono-white font-nunito font-normal text-lg sm:text-xs">
              Luh Made Wisnu S :{" "}
              <span className="sm:block">+62-851-7115-9915</span>
            </p>
            <p className="text-mono-white font-nunito font-normal text-lg sm:text-xs">
              Rizky Amelia :<span className="sm:block">+62- 878-8902-7188</span>
            </p>
          </section>
          <section>
            <h3 className="mb-2 text-primary-yellow font-nunito font-semibold text-xl sm:text-base">
              Visitor
            </h3>
            <a href="https://info.flagcounter.com/TCOQ">
              <img
                className="sm:w-24"
                src="https://s01.flagcounter.com/count2/TCOQ/bg_FFFFFF/txt_000000/border_CCCCCC/columns_3/maxflags_12/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
                alt="Flag Counter"
                border="0"
              />
            </a>
          </section>
        </div>

        <p className="text-center font-poppins font-semibold mt-7 text-mono-white-grey sm:font-light sm:text-xs sm:mt-5 sm:mb-7">
          © Institut Teknologi Kalimantan 2021. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};
export default Footer;
