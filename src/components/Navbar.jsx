import logo from "/img/SK_EDITZ_339.png";

function Navbar() {
  return (
    <div className="fixed z-[999] w-full h-8 p-10 flex justify-between items-center bg-gradient-to-r from-stone-800 from-5% via-sky-900 via-50% to-stone-800 to-95%">
      <div className="flex justify-center items-center gap-2">
        <img className="w-[2em]" src={logo} alt="logo" />
        <h2 className="font-semibold text-3xl text-green-500">Subhendu</h2>
      </div>
      <div className="flex gap-20">
        {["Home", "About", "Projects", "Contact"].map((data, index) => (
          <a key={index} className="font-semibold text-xl">
            {data}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
