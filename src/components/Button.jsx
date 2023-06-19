const Button = (props) => {
  if (props.type === "button") {
    if (props.hover === "no") {
      return (
        <button className="font-nunito text-base border-2 border-primary-yellow rounded-md px-6 py-3 text-mono-white bg-primary-yellow">
          {props.label}
        </button>
      );
    }
    return (
      <button className="font-nunito text-base border-2 border-primary-yellow rounded-md px-6 py-3 text-mono-white hover:bg-primary-yellow">
        {props.label}
      </button>
    );
  }
  return (
    <a
      className=" ml-16 font-nunito text-base text-mono-white hover:border-b-2 border-b-primary-yellow"
      href={props.href}
    >
      {props.label}
    </a>
  );
};

export default Button;
