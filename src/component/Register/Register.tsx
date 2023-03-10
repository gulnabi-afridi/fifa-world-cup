import React, { useState } from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import EastIcon from "@mui/icons-material/East";
import PrimaryButton from "../common/PrimaryButton";
import Router, { useRouter } from "next/router";

const Register: React.FC = () => {
  // ======> States
  const [NickName, Set_NickName] = useState("");
  const [PhoneNumber, Set_PhoneNumber] = useState("");
  const [Email, Set_Email] = useState("");
  const [Password, Set_Password] = useState("");
  const [RePassword, Set_RePassword] = useState("");

  const Router = useRouter();

  // =========>functions
  const UpdateNickName = (e: any) => {
    Set_NickName(e.target.value);
  };
  const UpdatePhoneNumber = (e: any) => {
    Set_PhoneNumber(e.target.value);
  };
  const UpdateEmail = (e: any) => {
    Set_Email(e.target.value);
  };
  const UpdatePassword = (e: any) => {
    Set_Password(e.target.value);
  };
  const UpdateRePassword = (e: any) => {
    Set_RePassword(e.target.value);
  };

  const Navigate = () => {
    Router.push("/new-group");
  };

  // ========> functions end here

  //=======>Register input objects
  const registerInput = [
    {
      label: "Nickname",
      type: "text",
      state: NickName,
      SetState: UpdateNickName,
    },
    {
      label: "Phone Number",
      type: "text",
      state: PhoneNumber,
      SetState: UpdatePhoneNumber,
    },
    {
      label: "Email",
      type: "text",
      state: Email,

      SetState: UpdateEmail,
    },
    {
      label: "Password",
      type: "text",
      state: Password,
      SetState: UpdatePassword,
    },
    {
      label: "Re-Password",
      type: "password",
      state: RePassword,
      SetState: UpdateRePassword,
    },
  ];

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
                    id={inpt.label}
                    value={inpt.state}
                    onChange={inpt.SetState}
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

export default Register;
