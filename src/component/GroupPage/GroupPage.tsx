import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import EachGroup from "./EachGroup";
import Router, { useRouter } from "next/router";

const GroupPage: React.FC = () => {
  // =====>states
  const [Group_Member, Set_Group_Member] = useState(19);
  const Router = useRouter();

  // ======>functions

  const Naviagte = () => {
    Router.push("/create-group");
  };

  // ========> groups data object

  const groups = [
    {
      image: "/Assets/group/group5.png",
      groupName: "“The Kings”",
      groupMember: Group_Member,
    },
    {
      image: "/Assets/group/group6.png",
      groupName: "“Lenooobos”",
      groupMember: Group_Member,
    },
    {
      image: "/Assets/group/group7.png",
      groupName: "“Quadoxs”",
      groupMember: Group_Member,
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
        px: { sm: 0, xs: 2 },
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
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
            p: 3,
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
            Your Friends Groups
          </Typography>
          {/* ==========> new group button */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={Naviagte}
              sx={{
                fontSize: "14px",
                background: "red",
                textTransform: "none",
                "&:hover": {
                  background: "red",
                },
              }}
            >
              New group +
            </Button>
          </Box>
          {/* =============> groups */}
          {groups.map((group, index) => {
            return (
              <EachGroup
                key={index}
                image={group.image}
                groupName={group.groupName}
                member={group.groupMember}
              ></EachGroup>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default GroupPage;
