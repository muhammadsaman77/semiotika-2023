import speaker_bg from "../../utils/assets/img/Speaker.png";
import Speaker from "./Speaker";
import speaker1 from "../../utils/assets/img/prof_arifsatria.jpg";
import speaker2 from "../../utils/assets/img/Dedi.jpg";
import speaker3 from "../../utils/assets/img/astrid.jpg";
const SpeakersList = () => {
  const speakers = [
    "Prof. Dr.  Arif Satria, SP., M.Si.",
    "Dr.rer.pol. Dedy Dwi Prastyo",
    "Astrid Aldila Octarizka, S.T., M.B.A",
  ];
  return (
    <>
      <div
        id="speakers"
        style={{
          backgroundImage: `url(${speaker_bg})`,
        }}
      >
        <h1 className="text-mono-white-grey font-bold text-6xl font-poppins text-center my-5 sm:text-3xl">
          Speakers
        </h1>
        <div className="flex flex-row">
          <Speaker src={speaker1} title={speakers[0]} />
          <Speaker src={speaker2} title={speakers[1]} />
          <Speaker src={speaker3} title={speakers[2]} />
        </div>
      </div>
    </>
  );
};
export default SpeakersList;
