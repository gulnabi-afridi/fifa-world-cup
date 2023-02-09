import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import { Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PreviewMatch from "./PreviewMatch";
import NextMatch from "./NextMatch";

const Home: React.FC = () => {
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
          display: "flex",
          flexDirection: "column",
          background: "black",
          //   borderRadius: "30px",
          p: 0.5,
        }}
      >
        {/* ========> top section */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
            borderRadius: "15px",
          }}
        >
          {/* ======>image */}
          <Box
            sx={{
              width: "246px",
              height: "95px",
              position: "relative",
              my: 4,
            }}
          >
            <Image
              src="/Assets/premierLeague.svg"
              fill
              alt="premier league image"
              className="cover"
            ></Image>
          </Box>
          {/* ========>group detail */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#A161D4",
              mt: "-15px",
              px: 2,
              py: 0.5,
              borderBottomLeftRadius: "13px",
              borderBottomRightRadius: "13px",
              zIndex: "10",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: "600",
                color: "white",
              }}
            >
              “Lenooobos”
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
              <PeopleAltIcon sx={{ color: "white" }} />
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                8
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* =========> Tournament Winner */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "start",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Image
              src="/Assets/premierLeagueSmalImage.svg"
              width={28}
              height={28}
              alt="winner-image"
              className="cover"
            ></Image>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "Inter,sans-serif",
                color: "white",
              }}
            >
              Premier League
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              gap: 1,
              justifyContent: "center",
              alignItems: "center",
              py: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: "500",
                fontFamily: "Inter,sans-serif",
                color: "white",
              }}
            >
              Tournament Winner
            </Typography>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
                justifyContent: "center",
                alignItems: "center",
                background: "white",
                borderRadius: "10px",
                py: 2,
              }}
            >
              <Image
                src="/Assets/team/winnerTeam.svg"
                width={55}
                height={55}
                className="cover"
                alt="winner team image"
              ></Image>
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: "500",
                  fontFamily: "Inter,sans-serif",
                  color: "#303030",
                }}
              >
                Man. United
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* ==========> Preview Matches */}
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              width: "fit-content",
              fontWeight: "500",
              fontFamily: "Inter,sans-serif",
              color: "white",
              background: "#353535",
              borderRadius: "6px",
              p: 1,
            }}
          >
            Preview Matches
          </Typography>
          {/* =======> date */}
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              fontFamily: "Inter,sans-serif",
              color: "white",
            }}
          >
            Jan 3, 2023
          </Typography>
          {/* ========> Each preview matches */}
          <PreviewMatch />
          <PreviewMatch bgColor="red" />
        </Box>
        {/* ============> Next Matches */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            py: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              fontFamily: "Inter,sans-serif",
              color: "white",
            }}
          >
            Next matches
          </Typography>
          {/* =======> date */}
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              fontFamily: "Inter,sans-serif",
              color: "white",
            }}
          >
            Jan 4, 2023
          </Typography>
          {/* ======> Each Match */}
          <NextMatch />
          <NextMatch />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
