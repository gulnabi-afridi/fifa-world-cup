import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "next/image";

const NextMatch: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        alignItems: "center",
        background: "white",
        borderRadius: "15px",
        px: 2,
        py: 3,
      }}
    >
      {/*  =======> one team */}
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image
          src="/Assets/team/team1.svg"
          width={68}
          height={80}
          alt="team one"
        ></Image>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "600",
            fontFamily: "Inter,sans-serif",
            color: "#353535",
          }}
        >
          Man. United
        </Typography>
      </Box>
      {/* ==========>score */}
      <Box
        sx={{
          height: "100%",
          display: "grid",
          justifyContent: "center",
          alignItems: "end",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {/* =======>one input */}
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <input
            className="scoreInput"
            style={{
              height: "50px",
              width: "50px",
              paddingLeft: "6px",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "12px",
            }}
            type="text"
            id="first"
            name="first"
          />
          <Typography
            sx={{
              fontSize: { sm: "14px", xs: "12px" },
              fontWeight: "500",
              fontFamily: "Inter, sans-serif",
              background: "#7314BE",
              borderRadius: "15px",
              color: "white",
              px: 1.5,
              py: 0.5,
            }}
          >
            1.55
          </Typography>
        </Box>
        {/*  */}
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* <RemoveIcon sx={{ color: "#353535", mt: 3.5 ,fontWeight:"800"}} />
           */}
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              fontFamily: "Inter,sans-serif",
              color: "#353535",
              mt: 1,
            }}
          >
            -
          </Typography>
          <Typography
            sx={{
              fontSize: { sm: "14px", xs: "12px" },
              fontWeight: "500",
              fontFamily: "Inter, sans-serif",
              background: "#7314BE",
              borderRadius: "15px",
              color: "white",
              px: 1.5,
              py: 0.5,
            }}
          >
            1.55
          </Typography>
        </Box>
        {/* ======> 2nd input */}
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <input
            className="scoreInput"
            style={{
              height: "50px",
              width: "50px",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "12px",
              paddingLeft: "6px",
            }}
            type="text"
            id="first"
            name="first"
          />
          <Typography
            sx={{
              fontSize: { sm: "14px", xs: "12px" },
              fontWeight: "500",
              fontFamily: "Inter, sans-serif",
              background: "#7314BE",
              borderRadius: "15px",
              color: "white",
              px: 1.5,
              py: 0.5,
            }}
          >
            1.55
          </Typography>
        </Box>
      </Box>
      {/* =======> 2nd team */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Image
          src="/Assets/team/team2.svg"
          width={68}
          height={80}
          alt="team one"
        ></Image>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "600",
            fontFamily: "Inter,sans-serif",
            color: "#353535",
          }}
        >
          Newcastle
        </Typography>
      </Box>
    </Box>
  );
};

export default NextMatch;
