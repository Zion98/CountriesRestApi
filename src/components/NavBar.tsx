import React from "react";
import styled from "styled-components";
import whiteMoon from "../assets/moon.svg";
import moonDark from "../assets/moonDark.svg";
const NavBar: React.FC<{ toggleDark: boolean; handleToggle: () => void }> = ({
  toggleDark,
  handleToggle,
}) => {
  return (
    <Navbar2
      className={`flex flex-row justify-between items-center px-12 py-4 ${
        toggleDark && "bg-[#2B3844]"
      }`}
    >
      <h2 className={`${toggleDark && "text-[#fff]"}`}>Where in the world?</h2>

      <button
        onClick={handleToggle}
        className={`${toggleDark && "text-[#fff]"}`}
      >
        <img
          className="inline"
          src={toggleDark ? moonDark : whiteMoon}
          alt="moon"
        />
        <span> Dark Mode</span>
      </button>
    </Navbar2>
  );
};

const Navbar2 = styled.div`
  box-shadow: 0px 11px 7px 2px rgba(0, 0, 0, 0.0294384);
`;

export default NavBar;
