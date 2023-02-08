import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import EastIcon from "@mui/icons-material/East";
import PrimaryButton from "../common/PrimaryButton";
import Router, { useRouter } from "next/router";

const Register: React.FC = () => {
  const Router = useRouter();

  const Navigate = () => {
    Router.push("/new-group");
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
        px: { sm: 0, xs: 1 },
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
          position: "relative",
          borderTop: "2px solid #B3D355 ",
          borderBottom: "2px solid #B3D355",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            borderRadius: "30px",

            background:
              "linear-gradient(180deg, #0F0D71 37.16%, rgba(100, 14, 168, 0.928724) 61.05%, #0F0D71 82.97%, rgba(100, 14, 168, 0.928724) 100%);",
          }}
        >
          {/* ========> backicon */}

          <Box
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              mt: 12,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                color: "white",
                fontSize: "24px",

                //   fontWeight: "500",
              }}
            >
              Register
            </Typography>
            {/* =========> inputs */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                mt: 4,
                zIndex: "10",
              }}
            >
              {registerInput.map((inpt, index) => {
                return (
                  <TextField
                    key={index}
                    type={inpt.type}
                    sx={{
                      width: "100%",
                      background: "white",
                      "& input": {
                        fontSize: "15px",
                        fontFamily: "Inter, sans-serif !important",
                        margin: "0px 15px",
                        fontWeight: "700",
                      },
                    }}
                    id="filled-basic"
                    label={inpt.label}
                    variant="filled"
                  />
                );
              })}
            </Box>
            {/* =========>next button */}
            <Box sx={{ my: 6, width: "100%" }}>
              <PrimaryButton
                navigate={Navigate}
                title="Next"
                paddLeft={7}
                paddRight={4}
                icon={<EastIcon sx={{ color: "white", fontSize: "40px" }} />}
              ></PrimaryButton>
            </Box>
            {/* ========> ellipse */}
            <Box
              sx={{
                width: "100%",
                height: "60px",
                mt: 4,
                mb: 1,
                borderRadius: "42%",
                background:
                  "linear-gradient(180deg, rgba(54, 109, 250, 0.38) 0%, rgba(15, 13, 113, 0.88) 100%)",
              }}
            ></Box>
          </Box>
        </Box>
        {/* =======> one image */}
        <Box sx={{ position: "absolute", top: "30px", left: "0px" }}>
          <Image
            src="/Assets/football.png"
            width={70}
            height={190}
            alt="football image"
          ></Image>
        </Box>
        {/* ========> image two */}
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            right: "0px",
            zIndex: "0",
          }}
        >
          <Image
            src="/Assets/lion.png"
            width={110}
            height={290}
            alt="football image"
          ></Image>
        </Box>
      </Box>
    </Box>
  );
};

const registerInput = [
  {
    label: "Nickname",
    type: "text",
  },
  {
    label: "Phone Number",
    type: "text",
  },
  {
    label: "Email",
    type: "text",
  },
  {
    label: "Password",
    type: "text",
  },
  {
    label: "Password",
    type: "password",
  },
];

export default Register;
