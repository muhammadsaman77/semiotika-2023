import speaker_bg from "../../utils/assets/img/nebula.jpg";
import Speaker from "./Speaker";
import speaker3 from "../../utils/assets/img/prof_arifsatria.jpg";
import speaker4 from "../../utils/assets/img/Dedi.jpg";
import speaker5 from "../../utils/assets/img/astrid.jpg";
import speaker1 from "../../utils/assets/img/wagub.jpg";
import speaker2 from "../../utils/assets/img/rektoritk.jpg";
const SpeakersList = () => {
  const speakers = [
    {
      nama: "H. Hadi Mulyadi, S.Si., M.Si.",
      src: speaker1,
      jabatan: "Wakil Gubernur Kalimantan Timur",
    },
    {
      nama: "Prof. Dr. rer. nat. Agus Rubiyanto M.Eng M.Sc",
      src: speaker2,
      jabatan: "Rektor ITK",
    },
    {
      nama: "Prof. Dr.  Arif Satria, SP., M.Si.",
      src: speaker3,
      jabatan: "Rektor IPB University",
    },
    {
      nama: "Dr.rer.pol. Dedy Dwi Prastyo",
      src: speaker4,
      jabatan: "Dosen ITS",
    },
    {
      nama: "Astrid Aldila Octarizka, S.T., M.B.A",
      src: speaker5,
      jabatan: "Head of Operations - Qwork Malaysia",
    },
  ];
  return (
    <>
      <div
        id="speakers"
        className="py-5 sm:py-1"
        style={{
          // backgroundImage: "linear-gradient(to bottom, #002687,#FFFFFF)",
          backgroundImage: `url(${speaker_bg})`,
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-mono-white-grey font-bold text-6xl font-poppins text-center my-5 sm:text-3xl mb-20 sm:mb-10">
          Speakers
        </h1>
        <div className="flex flex-wrap">
          <div className="w-1/2 sm:w-full">
            <h2 className="text-primary-yellow text-center text-4xl font-poppins font-bold mb-7 sm:text-2xl sm:mb-3">
              WELCOME SPEAKER
            </h2>
            <div className="flex fle-row">
              <Speaker
                nama={speakers[0]["nama"]}
                src={speakers[0]["src"]}
                jabatan={speakers[0]["jabatan"]}
              />

              <Speaker
                nama={speakers[1]["nama"]}
                src={speakers[1]["src"]}
                jabatan={speakers[1]["jabatan"]}
              />
            </div>
          </div>
          <div className="w-1/2 sm:w-full">
            <h2 className="text-primary-yellow text-center text-4xl font-poppins font-bold mb-7 sm:text-2xl sm:mt-5 sm:mb-3">
              SEMINAR SPEAKER
            </h2>
            <div className="flex fle-row">
              <Speaker
                nama={speakers[2]["nama"]}
                src={speakers[2]["src"]}
                jabatan={speakers[2]["jabatan"]}
              />

              <Speaker
                nama={speakers[3]["nama"]}
                src={speakers[3]["src"]}
                jabatan={speakers[3]["jabatan"]}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 sm:w-full mx-auto">
          <h2 className="text-primary-yellow text-center text-4xl font-poppins font-semibold mb-5 mt-10 sm:text-2xl sm:mt-5">
            WORKSHOP SPEAKER
          </h2>
          <div className="flex items-center justify-center">
            <Speaker
              nama={speakers[4]["nama"]}
              src={speakers[4]["src"]}
              jabatan={speakers[4]["jabatan"]}
            />
          </div>
          <span className="block text-mono-white text-center font-poppins text-xl m-5 sm:text-base">
            Topik: "Membangun Ide Bisnis dan Pembuatan Pitchdeck"
          </span>
        </div>
      </div>
    </>
  );
};
export default SpeakersList;
