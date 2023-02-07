import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import { imageListClasses, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

interface props {
  image: any;
  groupName: any;
  member: number;
}

const EachGroup: React.FC<props> = ({ image, groupName, member }: props) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "120px",
          position: "relative",
          "& img": {
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          },
        }}
      >
        <Image src={image} fill alt="group-image" className="cover"></Image>
      </Box>

      {/* ========>group detail */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          mt: "-15px",
          px: 2,
          zIndex: "10",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          {groupName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            py: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PeopleAltIcon sx={{ color: "#A161D4" }} />
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: "600",
              color: "#A161D4",
            }}
          >
            {member}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EachGroup;
