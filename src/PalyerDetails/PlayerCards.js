import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { cardStyling, imageStyle } from "./Style";

export const PlayerCards = ({ playerData }) => {
  //   console.log(playerData.UpComingMatchesList[0].CCode, "kus props");
  return (
    <Card style={cardStyling} sx={{ minWidth: 275 }}>
      <CardContent>
        <CardMedia
          component="img"
          height="300px"
          image={`/player-images/${playerData?.Id}.jpg`}
          alt={playerData?.PFName}
          style={imageStyle}
        />

        <Typography variant="h5" component="div">
          {playerData?.PFName}
        </Typography>

        <Typography variant="h6" component="div">
          {playerData?.TName}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Value: {playerData?.Value}
        </Typography>

        <Typography variant="body2">
          CCode: {playerData?.UpComingMatchesList[0]?.CCode}
          VsCCode: {playerData?.UpComingMatchesList[0]?.VsCCode}
        </Typography>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Date & Time: {playerData?.UpComingMatchesList[0]?.MDate}
        </Typography>
      </CardContent>
    </Card>
  );
};
