const Speaker = ({ src, title }) => {
  return (
    <>
      <div className="container">
        <div className=" relative">
          <img src={src} className="w-full object-cover h-full" alt="" />
          <div class="absolute inset-0 bg-primary-blue opacity-50"></div>
          <span className="font-nunito text-mono-new-white font-semibold text-xl absolute z-10 bottom-5 left-10 sm:text-xs sm:bottom-1 sm:left-2">
            {title}
          </span>
        </div>
      </div>
    </>
  );
};
export default Speaker;
