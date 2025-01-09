import NavAnimation from "../Animation/NavAnimation";

const NavBar = () => {
  return (
    <div className="flex justify-between p-2 bg-slate-900 w-full fixed">
      <div>
        <h2 className="ml-20 text-2xl font-semibold text-[#17E5CD]">Abhijit</h2>
      </div>

      <nav>
        <NavAnimation />
      </nav>
    </div>
  );
};

export default NavBar;
