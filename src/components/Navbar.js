import Button from "./Button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between ml-36  mt-2 fixed top-0 ">
      <Logo />
      <nav>
        <Button label="Home" href="asan" />
        <Button label="About" href="asan" />
        <Button label="Topics" href="asan" />
        <Button label="Topics" href="asan" />
        <Button label="Speakers" href="asan" />
        <Button label="Timeline" href="asan" />
        <Button label="Registration" href="asan" />
        <Button label="Location" href="asan" />
        <Button label="Contact Us" href="asan" />
      </nav>
    </div>
  );
};

export default Navbar;
