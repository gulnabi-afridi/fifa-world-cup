import React from "react";
import Image from "next/image";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

const PreviewMatch: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display:"grid",
        gridTemplateColumns:"1fr 1fr 1fr",
        justifyContent:"center", 
        alignItems: "center",
        background: "#353535",
        borderRadius: "15px",
        position: "relative",
        px: 4,
        py: 2,
      }}
    >
      {/* ====>one team */}
      <Box
        sx={{
          height:"100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          src="/Assets/team/team4.svg"
          width={68}
          height={80}
          alt="team one"
        ></Image>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "600",
            fontFamily: "Inter,sans-serif",
            color: "white",
          }}
        >
          Man. United
        </Typography>
      </Box>
      {/* =====>score */}
      <Box
        sx={{
          height:"100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            alignItems: "center",
            mt:4,
            
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              fontFamily: "Inter,sans-serif",
              color: "white",
            }}
          >
            4
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              fontFamily: "Inter,sans-serif",
              color: "white",
            }}
          >
            -
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              fontFamily: "Inter,sans-serif",
              color: "white",
            }}
          >
            1
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "600",
            fontFamily: "Inter,sans-serif",
            color: "white",
          }}
        >
          Finish
        </Typography>
      </Box>
      {/* =======> 2nd team */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image
          src="/Assets/team/team3.svg"
          width={68}
          height={80}
          alt="team one"
        ></Image>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "600",
            fontFamily: "Inter,sans-serif",
            color: "white",
          }}
        >
          Newcastle
        </Typography>
      </Box>
      {/* ======> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 0.5,
          alignItems: "center",
          borderRadius: "15px",
          background: "#1BE22F",
          py: 0.5,
          px: 3.5,
          position: "absolute",
          top: "-10px",
          left: "40%",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            fontFamily: "Inter,sans-serif",
            color: "black",
          }}
        >
          4
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            fontFamily: "Inter,sans-serif",
            color: "black",
          }}
        >
          -
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            fontFamily: "Inter,sans-serif",
            color: "black",
          }}
        >
          1
        </Typography>
      </Box>
      {/* ======>point */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "-10px",
          right: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            fontFamily: "Inter,sans-serif",
            color: "black",
            background: "#1BE22F",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          4
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            fontFamily: "Inter,sans-serif",
            color: "white",
          }}
        >
          pt
        </Typography>
      </Box>
    </Box>
  );
};

export default PreviewMatch;
