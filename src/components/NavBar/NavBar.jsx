import React, { useState } from "react";
import PropTypes from "prop-types";
import { BsCloudSun } from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineCloseCircle} from "react-icons/ai"
NavBar.propTypes = {};

function NavBar(props) {
    const [openMenu,setOpenMenu] = useState(false)
    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }
  return (
    <nav className="flex items-center">
      <div className="flex items-center">
        <p className="font-semibold mr-1">Good Morning</p>
        <BsCloudSun size={22}></BsCloudSun>
      </div>
      <ul className="ml-auto font-semibold relative">
          {
              !openMenu ? (<AiOutlineMenu size={22} className="cursor-pointer" onClick={handleMenu}/>) :
              (<AiOutlineCloseCircle size={24} onClick={handleMenu} />)
          }
          {
              openMenu && (
                  <div className="absolute right-2 bg-yellow-50 text-black p-4 text-13 cursor-pointer w-36">
                      <li>Quang Khai</li>
                      <li>Ptit</li>
                      <li>Hai Duong</li>
                      <li>Fabbi</li>
                  </div>
              )
          }
      </ul>
    </nav>
  );
}

export default NavBar;
