import React, { useEffect, useState } from "react";
import { API } from "../Api/Api";
import { PlayerCards } from "./PlayerCards";
import Grid from "@mui/material/Grid";
import { SearchField } from "./SearchField";

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

      {searchArr?.length > 0 ? (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 16 }}
        >
          {searchArr
            ?.sort((a, b) => a.Value - b.Value)
            .map((value) => (
              <Grid item xs={2} sm={4} md={4}>
                <PlayerCards playerData={value} />
              </Grid>
            ))}
        </Grid>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 16 }}
        >
          {playerData?.playerList
            ?.sort((a, b) => a.Value - b.Value)
            .map((value) => (
              <Grid item xs={2} sm={4} md={4}>
                <PlayerCards playerData={value} />
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
};

export default PlayerDetails;
