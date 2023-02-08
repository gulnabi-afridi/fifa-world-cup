import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import { Typography, useRadioGroup } from "@mui/material";
import PrimaryButton from "../common/PrimaryButton";
import Router, { useRouter } from "next/router";

const NewGroup: React.FC = () => {
  const Router = useRouter();

  const Navigate = () => {
    Router.push("/group-page");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        background: "black",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
        px: { xs: "6px", sm: 0 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "sm",
          alignItems: "start",
          background: "black",
          p: "6px",
          borderRadius: "30px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
            p: 2,
            py: 8,
            boxShadow: 4,
            background:
              "linear-gradient(180deg, #110F72 0%, #2B2A81 82.99%, #444291 100%)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              color: "white",
              fontSize: "30px",
              fontWeight: "600",
              textTransform: "uppercase",
              textAlign: "center",

              //   fontWeight: "500",
            }}
          >
            FIFA World cup <br /> qatar 2022
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              color: "white",
              fontSize: "16px",
            }}
          >
            Create friends group
          </Typography>
          {/* ============= */}
          <Box
            sx={{
              width: "100%",
              background: "white",
              borderRadius: "25px",
              display: "flex",
              mt: 4,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/Assets/newGroup.png"
              width={210}
              height={180}
              alt="new group image"
            ></Image>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: "22px",
                fontWeight: "700",
                color: "#4A4A4A",
              }}
            >
              Create Group
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                color: "#4A4A4A",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              its look like you dont have groups yet
            </Typography>
            {/* =========>next button */}
            <Box sx={{ my: 6, width: "100%", paddingX: 3 }}>
              <PrimaryButton
                navigate={Navigate}
                title="New Group"
                paddLeft={6}
                paddRight={3}
              ></PrimaryButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewGroup;
