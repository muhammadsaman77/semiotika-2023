const Speaker = ({ nama, src, jabatan }) => {
  return (
    <>
      <div className="w-1/2 mx-3">
        <img
          src={src}
          alt={nama}
          className="rounded-full  w-8/12 mx-auto h-auto "
        />
        <div className="bg-mono-white w-full text-primary-blue text-center font-poppins font-bold text-sm mt-4 rounded-full sm:rounded-3xl py-2 sm:text-xs sm:font-normal px-2">
          <span className="block ">{nama}</span>
          <span className="block">{jabatan}</span>
        </div>
      </div>
    </>
  );
};
export default Speaker;
