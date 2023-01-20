import React, { useEffect, useState } from "react";
import { API } from "../Api/Api";
import { PlayerCards } from "./PlayerCards";
import Grid from "@mui/material/Grid";
import { SearchField } from "./SearchField";
import { Typography } from "@mui/material";
import { heading } from "./Style";

const PlayerDetails = () => {
  const [playerData, setPlayerData] = useState([]);
  const [searchArr, setSearchedArr] = useState([]);

  useEffect(() => {
    const onResponse = {
      success: (res) => {
        const data = res;
        setPlayerData(data);
      },
      error: (err) => {
        alert("No data Available");
      },
    };
    API.playerDetailsGet(onResponse);
  }, []);

  return (
    <>
      <SearchField
        playerData={playerData}
        searchArr={searchArr}
        setSearchArr={setSearchedArr}
      />
      <Typography style={heading}>Player Details</Typography>

      {searchArr?.length > 0 ? (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 16, lg: 20 }}
        >
          {searchArr
            ?.sort((a, b) => a.Value - b.Value)
            .map((value) => (
              <Grid item xs={4} sm={4} md={4} key={value.Id}>
                <PlayerCards playerData={value} />
              </Grid>
            ))}
        </Grid>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 16, lg: 20 }}
        >
          {playerData?.playerList
            ?.sort((a, b) => a.Value - b.Value)
            .map((value) => (
              <Grid item xs={4} sm={4} md={4} key={value.Id}>
                <PlayerCards playerData={value} />
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
};

export default PlayerDetails;
