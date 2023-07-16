import Fee from "./Fee";

const FeeList = () => {
  const participantList = [
    {
      partisipant: "Peserta Seminar",
      costList: [
        {
          name: "Online",
          cost: "FREE",
        },
      ],
      fasilitas: ["E-Certificate", "Seminar Kit"],
    },
    {
      partisipant: "Peserta Workshop",
      costList: [
        {
          name: "Offline",
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
          name: "Online",
          cost: "IDR. 200 K",
        },
        {
          name: "Offline",
          cost: "IDR. 275 K",
        },
      ],
      fasilitas: ["E-Certificate", "Seminar Kit", "E-Journal"],
    },
    {
      partisipant: "Pemakalah Mahasiswa",
      costList: [
        {
          name: "Online",
          cost: "IDR. 150 K",
        },
        {
          name: "Offline",
          cost: "IDR. 225 K",
        },
      ],
      fasilitas: ["E-Certificate", "Seminar Kit", "E-Journal"],
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-between sm:gap-3 px-20">
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
