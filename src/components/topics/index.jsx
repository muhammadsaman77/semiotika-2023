import Topic from "./Topic";
import ilus_math from "../../utils/assets/icon/ilus_math.png";
import ilus_bisdig from "../../utils/assets/icon/ilus_bisdig.png";
import ilus_aktua from "../../utils/assets/icon/ilus_aktua.png";
import ilus_statis from "../../utils/assets/icon/ilus_statis.png";
import ilus_siif from "../../utils/assets/icon/ilus_siif.png";

const TopicsList = () => {
  const math = ["Analisis & Aljabar", "Matematika Terapan"];
  const aktua = ["Ilmu Aktuaria"];
  const bisdig = ["Pemasaran Digital", "Digitalisasi Bisnis"];
  const statis = ["Statistika Terapan", "Permodelan Statistika"];
  const siif = [
    "Sistem Informasi",
    "Manajemen Proyek SI",
    "IT Governance",
    "Audit SI",
    "Human Center Interaction",
    "Jaringan Komputer",
    "Kecerdasan Buatan",
    "Sistem Basis Data",
    "Cyber Security",
  ];
  return (
    <>
      <div className="flex flex-wrap pt-20 justify-evenly sm:pt-5" id="topics">
        <div className="flex flex-col sm:w-60">
          <Topic logo={ilus_math} topics={math} />
          <Topic logo={ilus_bisdig} topics={bisdig} />
        </div>

        <div className="flex flex-col sm:w-60">
          <Topic logo={ilus_statis} topics={statis} />
          <Topic logo={ilus_aktua} topics={aktua} />
        </div>
        <div className="flex flex-col sm:order-first ">
          <div className="flex flex-col items-end sm:ml-4">
            <h1 className="mb-3 font-poppins font-bold text-primary-blue text-6xl sm:text-3xl">
              Topics
            </h1>

            <hr
              className="bg-primary-yellow"
              style={{ width: "150px", height: "4px" }}
            ></hr>
            <h3 className="font-nunito font-semibold text-primary-blue text-sm mt-2 mb-5 sm:text-xs">
              Here’s some topics of SEMIOTIKA
            </h3>
          </div>

          <Topic logo={ilus_siif} topics={siif} />
        </div>
      </div>
    </>
  );
};
export default TopicsList;
