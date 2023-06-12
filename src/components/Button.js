const Button = (props) => {
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
