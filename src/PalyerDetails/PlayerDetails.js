import React, { useEffect, useState } from "react";
import { API } from "../Api/Api";

const PlayerDetails = () => {
  const [playerData, setPlayerData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    playersData();
  }, []);

  const playersData = () => {
    const onResponse = {
      success: (res) => {
        const data = res;
        console.log(res, "kus res");
        setPlayerData(data);
      },
      error: (err) => {
        setErrorMessage("Something wrong");
      },
    };
    API.playerDetailsGet(onResponse);
  };

  return <div>PlayerDetails</div>;
};

export default PlayerDetails;
