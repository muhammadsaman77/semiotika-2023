import Fee from "./Fee";

const FeeList = () => {
  const participantList = [
    {
      partisipant: "Peserta Seminar",
      type: "",
      costList: [
        {
          name: "",
          cost: "FREE",
        },
      ],
      fasilitas: ["E-Certificate", "Seminar Kit"],
    },
    {
      partisipant: "Peserta Workshop",
      type: "Hybrid",
      costList: [
        {
          name: "",
          cost: "IDR. 35 K",
        },
      ],
      fasilitas: ["E-Certificate", "Seminar Kit"],
    },
    {
      partisipant: "Pemakalah Umum",
      type: "Hybrid",
      costList: [
        {
          name: "Early Bird",
          cost: "IDR. 225 K",
        },
        {
          name: "Normal Bird",
          cost: "IDR. 275 K",
        },
      ],
      fasilitas: ["E-Certificate", "Seminar Kit", "E-Journal"],
    },
    {
      partisipant: "Pemakalah Mahasiswa",
      type: "Hybrid",
      costList: [
        {
          name: "Early Bird",
          cost: "IDR. 175 K",
        },
        {
          name: "Normal Bird",
          cost: "IDR. 225 K",
        },
      ],
      fasilitas: ["E-Certificate", "Seminar Kit", "E-Journal"],
    },
  ];
  return (
    <>
      <div className="flex flex-row justify-between">
        {participantList.map((e) => (
          <Fee
            costList={e["costList"]}
            partisipant={e["partisipant"]}
            fasilitas={e["fasilitas"]}
            type={e["type"]}
          />
        ))}
      </div>
    </>
  );
};
export default FeeList;
