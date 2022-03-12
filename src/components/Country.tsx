import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";

const Country: React.FC<{ toggleDark: boolean }> = ({ toggleDark }) => {
  const { id: countryName } = useParams();

  const [country, setCountry] = useState<any>([]);
  const [loading, setloading] = useState(false);

  const fetchData = async () => {
    setloading(true);
    // `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    try {
      const data = await axios.get(
        `https://restcountries.com/v2/alpha/${countryName}`
      );
      setCountry(data.data);
      console.log(data.data, "cb");
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  const {
    flags,
    name,
    population,
    languages,
    region,
    capital,
    subregion,
    currencies,
    topLevelDomain,
    borders,
  } = country;

  console.log({ country });
  return (
    <CountryStyle className="px-12 h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-screen w-screen">
          <Loader width={20} size={10} />
        </div>
      ) : (
        <>
          <Link to="/" className="back-btn pt-12 inline-block">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="call-made">
                  <path
                    id="Shape"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
                    fill="#111517"
                  />
                </g>
              </svg>
            </span>
            <span className="pl-2">Back</span>
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center w-full h-4/5">
            <div className="firstImg basis-1/2">
              <img className="" src={flags?.svg} alt="single" />
            </div>
            <div>
              <div
                className={`md:ml-24 basis-1/2 ${toggleDark && "text-[#fff]"}`}
              >
                <h1 className="font-bold md:pt-0 pt-4 text-2xl">
                  {name?.official}
                </h1>
                <div className="flex flex-col md:flex-row justify-between w-full my-3">
                  <div>
                    <p className="font-bold py-2">
                      Native Name:{" "}
                      <span className="subSpan font-extralight">{name}</span>
                    </p>
                    <p className="font-bold py-2">
                      Population:{" "}
                      <span className="subSpan font-extralight">
                        {population}
                      </span>
                    </p>
                    <p className="font-bold py-2">
                      Region:{" "}
                      <span className="subSpan font-extralight">{region}</span>
                    </p>
                    <p className="font-bold py-2">
                      Sub Region:{" "}
                      <span className="subSpan font-extralight">
                        {subregion}
                      </span>
                    </p>
                    <p className="font-bold py-2">
                      Capital:{" "}
                      <span className="subSpan font-extralight">{capital}</span>
                    </p>
                  </div>

                  <div>
                    <p className="font-bold py-2">
                      Top Level Domain:{" "}
                      <span className="subSpan font-extralight">
                        {topLevelDomain?.[0]}
                      </span>
                    </p>
                    <p className="font-bold py-2">
                      Currencies:{" "}
                      <span className="subSpan font-extralight">
                        {currencies &&
                          Object.values(currencies).map((item: any) => (
                            <span>{item?.name + ", "}</span>
                          ))}
                      </span>
                    </p>
                    <p className="font-bold py-2">
                      Languages:{" "}
                      <span className="subSpan font-extralight">
                        {languages &&
                          Object.values(languages[0]).map((item: any) => (
                            <span key={item}>{item + ", "}</span>
                          ))}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap justify-start items-center">
                  <span className="pr-4">Border Countries:</span>{" "}
                  {borders &&
                    borders.map((border: string) => (
                      <a
                        className={`inline-block px-4 py-1 mr-4 ${
                          toggleDark ? "bg-[#2B3844]" : "bg-[#fff]"
                        }`}
                        key={border}
                        href={`/${border}`}
                      >
                        {border}
                      </a>
                    ))}{" "}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </CountryStyle>
  );
};

const CountryStyle = styled.div`
  .back-btn {
    svg {
      display: inline;
    }
  }

  .firstImg {
    /* width: 500px;
    height: 400px; */
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default Country;

// https://restcountries.com/v3.1/name/nigeria?fullText=true
