const Button = (props) => {
  if (props.type === "button") {
    return (
      <button className="font-nunito text-base border-2 border-primary-yellow rounded-md px-6 py-3 text-mono-white">
        {props.label}
      </button>
    );
  }
  return (
    <a
      className=" ml-16 font-nunito text-base text-mono-white"
      href={props.href}
    >
      {props.label}
    </a>
  );
};

export default Button;
