import Topic from "./Topic";
import ilus_math from "../utils/assets/icon/ilus_math.png";
import ilus_bisdig from "../utils/assets/icon/ilus_bisdig.png";
import ilus_aktua from "../utils/assets/icon/ilus_aktua.png";
import ilus_statis from "../utils/assets/icon/ilus_statis.png";
import ilus_siif from "../utils/assets/icon/ilus_siif.png";

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
      <div className="flex flex-row pt-20 justify-evenly" id="topics">
        <div className="grid grid-cols-2 gap-x-32">
          <Topic logo={ilus_math} topics={math} />
          <Topic logo={ilus_bisdig} topics={bisdig} />

          <Topic logo={ilus_statis} topics={statis} />
          <Topic logo={ilus_aktua} topics={aktua} />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-end ">
            <h1 className="mb-3 font-poppins font-bold text-primary-blue text-6xl ">
              Topics
            </h1>

            <hr
              className="bg-primary-yellow"
              style={{ width: "150px", height: "4px" }}
            ></hr>
            <h3 className="font-nunito font-semibold text-primary-blue text-sm mt-2 mb-5">
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
