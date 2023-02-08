import React from "react";
import { Button, Box } from "@mui/material";
import { Typography } from "@mui/material";
interface Props {
  title: string;
  icon?: any;
  paddLeft: number;
  paddRight: number;
  navigate?:any;
}

const PrimaryButton: React.FC<Props> = ({
  title,
  icon,
  paddLeft,
  paddRight,
  navigate,
}: Props) => {
  return (
    <Button
     onClick={navigate}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(0deg, #A161D4, #A161D4)",
        pr:  paddRight ,
        pl: paddLeft ,
        py: 1.2,
        borderRadius: "30px",
      }}
    >
      <Typography
        sx={{
          width: "100%",
          fontSize: "20px",
          fontWeight: "700",
          color: "white",
        }}
      >
        {title}
      </Typography>
      {icon}
    </Button>
  );
};

export default PrimaryButton;
