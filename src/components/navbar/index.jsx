import Button from "../button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between ml-20  mt-3 fixed top-0 ">
      <Logo />
      <nav>
        <Button label="Home" href="/" />
        <Button label="About" href="/#about" />
        <Button label="Topics" href="/#topics" />
        <Button label="Speakers" href="/#speakers" />
        <Button label="Timeline" href="/#timeline" />
        <Button label="Registration" href="/#registration" />
        <Button label="Location" href="/#location" />
        <Button label="Contact Us" href="/#contact" />
      </nav>
    </div>
  );
};

export default Navbar;
