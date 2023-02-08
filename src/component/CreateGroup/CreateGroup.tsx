import React from "react";
import { useState, useRef } from "react";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import PrimaryButton from "../common/PrimaryButton";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import Router, { useRouter } from "next/router";

const CreateGroup: React.FC = () => {
  // ======>states
  const [age, setAge] = React.useState("none");
  const inputRef: any = useRef(null);
  const Router = useRouter();

  // ======> functions
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleClick = (event: any) => {
    inputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
  };

  const Navigate = () => {
    Router.push("/");
  };

  // =========> functions end here
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        py: 4,
        display: "flex",
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
            p: 1,
            py: 8,
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
            Make new group of friends
          </Typography>
          {/* ============= */}
          <Box
            sx={{
              width: "100%",
              background: "white",
              borderRadius: "10px",
              display: "flex",
              py: 3,
              px: 4,
              flexDirection: "column",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: "20px",
                fontWeight: "500",
                color: "black",
              }}
            >
              New Group
            </Typography>
            {/* =============> select box */}
            <Select
              sx={{
                width: "90%",
                height: "55px",
                color: "#313131",
                fontWeight: "500",
                my: 2,
                fontSize: "16px",
                fontFamily: "Montserrat, sans-serif",
                boxShadow: 4,
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="none" disabled>
                Select tournament
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            {/* ===========> Enter group name input field */}
            <Box
              sx={{ width: "100%", display: "flex", flexDirection: "column" }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Group Name:
              </Typography>
              <TextField
                sx={{
                  width: "100%",
                  fontFamily: "Monstserrat,sans-serif",
                  "& input": {
                    fontFamily: "Monstserrat,sans-serif",
                    height: "40px",
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#313131",
                  },
                }}
                id="standard-basic"
                placeholder="write your group name"
                variant="standard"
              />
            </Box>
            {/* ===========> add group picture */}
            <Box
              sx={{
                width: "100%",
                py: 2,
                "& input": {
                  display: "none",
                },
              }}
            >
              <input ref={inputRef} type="file" onChange={handleFileChange} />
              <Button
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  p: 4,
                  borderRadius: "10px",
                  gap: 2,
                  border: "1px solid #727272",
                }}
                type="button"
                onClick={handleClick}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid black",
                    p: 1.4,
                    borderRadius: "50%",
                  }}
                >
                  <AddIcon
                    sx={{ fontSize: "35px", fontWeight: "400", color: "black" }}
                  />
                </Box>
                <Typography
                  sx={{
                    color: "#313131",
                    fontWeight: "400",
                    fontSize: "14px",
                    fontFamily: "Monstserrat,sans-serif",
                    textTransform: "none",
                  }}
                >
                  Add group picture
                </Typography>
              </Button>
            </Box>

            {/* =========>next button */}
            <Box sx={{ my: 1, width: "100%" }}>
              <PrimaryButton
                navigate={Navigate}
                title="Finish"
                paddLeft={0}
                paddRight={0}
              ></PrimaryButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateGroup;
