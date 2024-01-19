import logo from "../assets/images/sgpt3.png";

const Header = () => {
  return (
    <>
      <div className="h-[13vh] absolute w-full z-10 flex flex-row items-center bg-gradient-to-b from-black">
        <img className="h-12 ml-9" src={logo} alt="logo" />
      </div>
    </>
  )
}

export default Header