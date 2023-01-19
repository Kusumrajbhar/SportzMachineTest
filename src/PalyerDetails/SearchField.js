import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { searchField, noMatchMessage } from "./Style";

export const SearchField = ({ playerData, searchArr, setSearchArr }) => {
  const [searchedValue, setSearchedValue] = useState("");

  const changeHandler = (e) => {
    setSearchedValue(e.value);
    let searchedData = playerData?.playerList.filter((item) =>
      item?.PFName.toLocaleLowerCase().includes(e.value.toLocaleLowerCase())
    );
    setSearchArr(searchedData);
  };

  return (
    <>
      <TextField
        style={searchField}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={searchedValue}
        onChange={(e) => changeHandler(e.target)}
      />

      {searchedValue && searchArr?.length === 0 && (
        <div style={noMatchMessage}> Searched Data is Not Present</div>
      )}
    </>
  );
};
