import speaker_bg from "../utils/assets/img/Speaker.png";
import Speaker from "./Speaker";
import speaker1 from "../utils/assets/img/Speaker1.jpg";
import speaker2 from "../utils/assets/img/Speaker2.jpg";
import speaker3 from "../utils/assets/img/Speaker3.jpg";
const SpeakersList = () => {
  const speakers = [
    "Prof. Albert Enstain",
    "Prof. Nanami Kento",
    "Mrs. Anne Grande",
  ];
  return (
    <>
      <div
        id="speakers"
        style={{
          backgroundImage: `url(${speaker_bg})`,
          backgroundPosition: "top",
        }}
      >
        <h1 className="text-mono-white-grey font-bold text-6xl font-poppins text-center my-5">
          Speakers
        </h1>
        <div className="flex flex-row justify-between">
          <Speaker src={speaker1} title={speakers[0]} />
          <Speaker src={speaker2} title={speakers[1]} />
          <Speaker src={speaker3} title={speakers[2]} />
        </div>
      </div>
    </>
  );
};
export default SpeakersList;
