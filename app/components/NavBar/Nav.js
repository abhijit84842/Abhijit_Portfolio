const NavBar = () => {
  return (
    <div className="flex justify-between mt-2">
      <div>
        <h2 className="ml-20 text-2xl font-semibold text-white">Abhijit</h2>
      </div>
      <nav className="flex gap-20 mr-20 text-xl font-semibold text-white">
        <div>
          Home
        </div>
        <div>
          About Me
        </div>
        <div>
          Skills
        </div>
        <div>
          Projects
        </div>
        <div>
          Contact
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
