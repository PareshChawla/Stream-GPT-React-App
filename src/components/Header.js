import logo from "../assets/images/sgpt3.png";

const Header = () => {
  return (
    <>
      <div className="h-[8vh] md:h-[13vh] absolute w-full z-10 flex items-center bg-gradient-to-b from-black">
        <img className="h-7 mt-3 ml-3 md:h-12 md:ml-9" src={logo} alt="logo" />
      </div>
    </>
  );
};

export default Header;
