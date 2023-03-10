import React from "react";
import { useState, useRef } from "react";
import { Box } from "@mui/system";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Image from "next/image";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import EastIcon from "@mui/icons-material/East";
import PrimaryButton from "../common/PrimaryButton";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { useRouter } from "next/router";

const Login: React.FC = () => {
  // =====>states
  const [image, Set_Image] = useState("");
  const [First_Name, Set_First_Name] = useState("");
  const [Last_Name, Set_Last_Name] = useState("");

  const inputRef: any = useRef(null);
  const Router = useRouter();

  // ========>functions

  const UpdateFirstName = (e: any) => {
    Set_First_Name(e.target.value);
  };

  const UpdateLastName = (e: any) => {
    Set_Last_Name(e.target.value);
  };

  const handleClick = (event: any) => {
    inputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    Set_Image(URL.createObjectURL(event.target.files[0]));
    console.log(image);
  };

  const Navigate = () => {
    Router.push("/register");
  };

  // ==========>functions ends here

  // =======> input form object
  const loginInput = [
    {
      label: "First Name",
      state: First_Name,
      SetState: UpdateFirstName,
    },
    {
      label: "Last Name",
      state: Last_Name,
      SetState: UpdateLastName,
    },
  ];
  // ========> input from object end here

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        py: 4,
        background: "black",
        justifyContent: "center",
        alignItems: "center",
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
          {/* =======> back icon */}
          <ArrowBackIosNewIcon
            onClick={() => Router.push("/")}
            sx={{ color: "white", fontSize: "30px", m: 3, cursor: "pointer" }}
          />
          <Box
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              mt: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                color: "white",
                fontSize: "24px",
              }}
            >
              Create your Profile
            </Typography>
            {/* =========> profile image */}
            <Box
              onClick={handleClick}
              sx={{
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
                my: 3,
                borderRadius: "50%",
                "& input": {
                  display: "none",
                },
              }}
            >
              <Box
                sx={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  position: "relative",
                  border: "10px solid #AC72DB",
                  "& img": {
                    borderRadius: "50%",
                  },
                  backgroundImage: `${
                    image === "" ? "url(/Assets/profile.jpg)" : `url(${image})`
                  }`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></Box>
              {/* =======>profile semi circle */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-60px",
                  left: "-27px",
                }}
              >
                <Image
                  src="/Assets/profileStyle1.png"
                  width={257}
                  height={160}
                  alt=""
                ></Image>
              </Box>
              {/* =====> camera icon */}
              <Box sx={{ position: "absolute", bottom: "10px", left: "40%" }}>
                <CameraAltOutlinedIcon
                  sx={{ color: "white", fontSize: "30px" }}
                />
              </Box>
              <input ref={inputRef} type="file" onChange={handleFileChange} />
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              {loginInput.map((inpt, index) => {
                return (
                  <TextField
                    key={index}
                    sx={{
                      width: "100%",
                      background: "white",
                      "& input": {
                        fontSize: "15px",
                        fontFamily: "Inter, sans-serif !important",
                        margin: "0px 15px",
                        fontWeight: "700",
                        borderBottom: "none",
                      },
                    }}
                    id={inpt.label}
                    label={inpt.label}
                    value={inpt.state}
                    onChange={inpt.SetState}
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
                paddLeft={6}
                paddRight={3}
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
      </Box>
    </Box>
  );
};

export default Login;
