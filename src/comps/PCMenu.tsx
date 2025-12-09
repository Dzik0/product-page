export default function PCMenu() {
  return (
    <nav className="text-my-dark-grayish-blue ml-10">
      <ul className="flex flex-row gap-5">
        <li className="hover:text-my-black cursor-pointer hover:font-bold">
          Collections
        </li>
        <li className="hover:text-my-black cursor-pointer hover:font-bold">
          Men
        </li>
        <li className="hover:text-my-black cursor-pointer hover:font-bold">
          Women
        </li>
        <li className="hover:text-my-black cursor-pointer hover:font-bold">
          About
        </li>
        <li className="hover:text-my-black cursor-pointer hover:font-bold">
          Contact
        </li>
      </ul>
    </nav>
  );
}
