import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-between mt-2">
      <div>
        <h2 className="ml-20 text-2xl font-semibold text-[#17E5CD]">Abhijit</h2>
      </div>
      <nav className="flex gap-20 mr-20 text-xl font-semibold text-white">
        <div className="text-[#F61E1E]">
          <Link href={"/"}>Home</Link>
        </div>
        <div>
          <Link href={""}>About Me</Link>
        </div>
        <div>
        <Link href={""}>Skills</Link>
        </div>
        <div>
        <Link href={""}>Exprience</Link>
        </div>
        <div>
        <Link href={""}>Projects</Link>
        </div>
        <div>
        <Link href={""}>Contact Me</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
