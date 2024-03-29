const Button = (props) => {
  if (props.type === "button") {
    if (props.hover === "no") {
      return (
        <button
          style={{ boxShadow: "2px 2px 24px #FF9C01" }}
          onClick={props.onClick}
          className="font-nunito text-base border-2 border-primary-yellow rounded-md px-6  py-3 text-mono-white bg-primary-yellow  "
        >
          {props.label}
        </button>
      );
    }
    return (
      <button
        className="font-nunito text-base border shadow-lg border-primary-yellow rounded-md px-6 py-3 text-mono-white hover:bg-primary-yellow sm:px-3 sm:py-2 sm:text-sm"
        onClick={props.onClick}
      >
        {props.label}
      </button>
    );
  }
  return (
    <a
      className="text-base text-mono-white py-2  flex mx-8 group-hover:text-primary-yellow"
      href={props.href}
    >
      {props.label}
    </a>
  );
};

export default Button;
