import React from "react";
import styled from "styled-components";
import search from "../assets/search.svg";
const Search: React.FC<{
  toggleDark: boolean;
  searchValue: string;
  handleSearch: (e: any) => void;
}> = ({ searchValue, handleSearch, toggleDark }) => {
  return (
    <SearchBox toggleDark={toggleDark}>
      <div className="search-box">
        <img src={search} alt="search" className="search-img" />
        <input
          className={` ${toggleDark && "bg-[#2B3844]"}`}
          type="search"
          onChange={handleSearch}
          value={searchValue}
          placeholder="Search for country..."
        />
      </div>
    </SearchBox>
  );
};

const SearchBox = styled.div<{ toggleDark: boolean }>`
  .search-box {
    background: #fff;
    height: 100%;
    width: 300px;
    position: relative;
  }
  .search-img {
    top: 0.5rem;
    left: 0.6rem;
    position: absolute;
  }

  input[type="search"] {
    padding: 0.5rem 1rem;
    background: ${({ toggleDark }) => (toggleDark ? "#2B3844" : "#fff")};
    color: ${({ toggleDark }) => (toggleDark ? "#ffffff" : "#000")};
  
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    ::placeholder {
      padding-left: 2rem;
      font-weight: 200;
      color: ${({ toggleDark }) => (toggleDark ? "#fff" : "#000")}
    }
  }
`;
export default Search;
