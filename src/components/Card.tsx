import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ICountryDetails from "../types";

const Card: React.FC<{ items: ICountryDetails; toggleDark: boolean }> = ({
  items,
  toggleDark,
}) => {
  const { flags, name, population, region, capital,alpha3Code } = items;
  return (
    <Link to={`/${alpha3Code}`}>
      <MainDiv className={` ${toggleDark && "bg-[#2B3844] border-[#2B3844]"}`}>
        <ImgBox src={flags.svg} alt="countryPicture" />

        <ListBox className={`mx-6 ${toggleDark && "text-[#fff]"}`}>
          <h2 className="font-black py-2">{name}</h2>
          <p className="font-medium">
            Population:{" "}
            <span className="subSpan font-extralight">{population}</span>
          </p>
          <p className="font-medium">
            Region: <span className="subSpan font-extralight">{region}</span>
          </p>

          <p className="font-medium">
            Capital: <span className="subSpan font-extralight">{capital}</span>
          </p>
        </ListBox>
      </MainDiv>
    </Link>
  );
};

const MainDiv = styled.div`
  width: 300px;
  height: 350px;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;

  &:hover{
    transition: all 300ms;
    transform: scale(1.1);
  }

  .subSpan {
    font-weight: 100 !important;
  }
`;

const ImgBox = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ListBox = styled.div``;

export default Card;
