import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { cardStyling, imageStyle, dateTime } from "./Style";

export const PlayerCards = ({ playerData }) => {
  return (
    <Card style={cardStyling} sx={{ minWidth: 275 }}>
      <CardContent>
        <CardMedia
          component="img"
          height="320px"
          image={`/player-images/${playerData?.Id}.jpg`}
          alt={playerData?.PFName}
          style={imageStyle}
        />
        <Typography sx={{ textShadow: "2px 2px 5px lightgrey" }} variant="h5">
          {playerData?.PFName}
        </Typography>

        <Typography variant="h6">{playerData?.TName}</Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          ${playerData?.Value}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mr: "5%",
            ml: "5%",
          }}
        >
          <Typography>
            CCode:{" "}
            {`${
              playerData?.UpComingMatchesList[0]?.CCode
                ? playerData?.UpComingMatchesList[0]?.CCode
                : "--"
            }`}
          </Typography>
          <Typography>
            VsCCode:{" "}
            {`${
              playerData?.UpComingMatchesList[0]?.VsCCode
                ? playerData?.UpComingMatchesList[0]?.VsCCode
                : "--"
            }`}
          </Typography>
        </Typography>

        <hr />

        <Typography
          style={dateTime}
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          {`${
            playerData?.UpComingMatchesList[0]?.MDate
              ? playerData?.UpComingMatchesList[0]?.MDate
              : "---"
          }`}
        </Typography>
      </CardContent>
    </Card>
  );
};
