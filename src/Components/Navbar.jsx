import { IoChevronDown, IoSearch } from "react-icons/io5";
import { FaChevronDown, FaShoppingBasket, FaUser } from "react-icons/fa";
function Navbar() {
  return (
    <>
      <div className="nav_container ">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="myForm_search">
          <form action="">
            <input type="search" name="" id="" />
            <span>
              <IoSearch size={25} color="#ccc" />
            </span>
          </form>
        </div>
        <div className="ul">
          <ul className="">
            <li>
              En-Gb
              <ul>
                <li>Ind</li>
                <li>Aust</li>
              </ul>
            </li>

            <li>
              $USD
              <ul>
                <li>&#x20A6;Naira</li>
                <li>¥Yen</li>
              </ul>
            </li>

            <li>
              <FaUser /> My Account <IoChevronDown />
            </li>
          </ul>
        </div>
        <div className="cart">
          <button>
            <FaShoppingBasket />0 items
          </button>
        </div>
      </div>

      <div className="navigation mt-4">
        <ul className="list-unstyled myRow">
          <li>Home</li>
          <li>
            Shop
            <FaChevronDown />
          </li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
