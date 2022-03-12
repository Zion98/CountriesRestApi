import React from "react";
import Select from "react-select";

// interface customOptions {
//   value: string;
//   label: string;
// }
const SelectBox: React.FC<{
  placeholder: string;
  options: any;
  single: string;
  handleChange: (value: any) => void;
  toggleDark: boolean;
  //   select: string;
}> = ({ options, placeholder, single, handleChange, toggleDark }) => {


  const customStyles: any = {
    option: (provided: any, state: any) => ({
      ...provided,
      width: state?.selectProps.width,
    //   color: state?.selectProps.menuColor,
      color:toggleDark?"#fff":"#000",
      "&:hover": {
        color:toggleDark?"#000":"#000",
        backgroundColor:toggleDark?"#fff":"#f2f2f2"
      },
    }),

    menuList: () => ({
      paddingTop: 0,
      paddingBottom: 0,
      hover: "red",
      background: toggleDark ? "#2B3844" : "#fff",
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      display: "none",
    }),

    placeholder: () => ({
      color: toggleDark?"#fff":"#000",
      position: "relative",
      bottom: ".8rem",
    }),

    control: (base: any, state: any) => ({
      ...base,
      // border: state.isFocused ? 0 : 0,
      boxShadow: state?.isFocused ? 0 : 0,
      "&:hover": {
        border: state?.isFocused ? 0 : 0,
      },
      border: "none",
      background:toggleDark? "#2B3844":"#fff",
      color: toggleDark?"#fff":"#fff",
      opacity: "0.8",
    }),
  };
  return (
    <>
      <Select
        maxMenuHeight={4}
        options={options}
        styles={customStyles}
        isSearchable={false}
        className="select-field"
        placeholder={single ? single : placeholder}
        value={single}
        onChange={handleChange}
        autoFocus={true}
      />
    </>
  );
};

export default SelectBox;
