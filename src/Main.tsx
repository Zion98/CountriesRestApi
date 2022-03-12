import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
// import Select from "./components/Select";
import SelectBox from "./components/Select2";
import Search from "./components/Search";
import ICountryDetails from "./types";
import Loader from "./components/Loader";

const Main: React.FC<{ toggleDark: boolean }> = ({ toggleDark }) => {
  const [countries, setCountries] = useState<any>([]);
  const [selectValue, setSelectValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [loading, setloading] = useState(false);

  const fetchData = async () => {
    setloading(true);
    try {
      const data = await axios.get("https://restcountries.com/v2/all");
      setCountries(data.data);
      setloading(false);
    } catch (error) {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const options = [
    {
      label: "Africa",
      value: "Africa",
    },
    { label: "Americas", value: "Americas" },
    { label: "Asia", value: "Asia" },
    { label: "Europe", value: "Europe" },
    { label: "Oceania", value: "Oceania" },
  ];

  function handleSearch(e: any) {
    setSearchValue(e.target.value);
  }

  let countrySearch = countries.filter((country: ICountryDetails) => {
    if (searchValue === "") {
      return country;
    } else {
      return country?.name
        .toLowerCase()
        .trim()
        .includes(searchValue.toLowerCase().trim());
    }
  });

  const handleSelect = (value: any) => {
    setSelectValue(value?.value);
  };

  countrySearch = countrySearch.filter((country: ICountryDetails) => {
    if (selectValue === "") {
      return country;
    } else {
      return country?.region.toLowerCase() === selectValue.toLowerCase();
    }
  });

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-screen">
          <Loader width={20} size={10} />
        </div>
      ) : (
        <>
          <div className="navBar flex flex-col md:flex-row gap-y-6 md:gap-y-0 justify-between items-start md:items-center px-10 py-6">
            <Search
              searchValue={searchValue}
              handleSearch={handleSearch}
              toggleDark={toggleDark}
            />
            <SelectBox
              placeholder={"Filter by Region"}
              options={options}
              single={selectValue}
              toggleDark={toggleDark}
              handleChange={handleSelect}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-12">
            {countrySearch.length > 0 ? (
              countrySearch.map((item: ICountryDetails, index: number) => {
                return (
                  <Card items={item} key={item.name} toggleDark={toggleDark} />
                );
              })
            ) : (
              <p className="flex flex-row w-full items-center justify-center">
                Country not found, Please reload
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
