export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white opacity-95 py-4 sticky top-0 z-30 px-30">
      <h1 className="font-medium text-2xl">Swornims.</h1>
      <nav className="flex items-center gap-20">
        <ul className="flex gap-10">
          {/* <li className="cursor-pointer">Experience</li> */}
          <a href="#portfolio">
            <li className="cursor-pointer">Portfolio</li>
          </a>
        </ul>
        <a href="#connect">
          <button className="border border-gray-500 px-8 py-2 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white transition-colors duration-300 ease-in-out">
            Connect with me
          </button>
        </a>
      </nav>
    </header>
  );
}
