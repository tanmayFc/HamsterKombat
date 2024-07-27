"use client";
import React, { useEffect } from "react";
import "./styles/App.css";
import { mainCharacter, dollarCoin } from "../../assets/images/index";
import axios from "axios";
import { useStore } from "../../../lib/store/userStore";
import { Box, Grid, Typography } from "@mui/material";
import { Height } from "@mui/icons-material";
import image from "../assets/image/dolor_background.png";
import goat from "../assets/image/goat.png";
import dailyAttendance from "../assets/icon/dailyattendance.png";
import dailyQuiz from "../assets/icon/dailyquiz.png";
import secretCode from "../assets/icon/secretcode.png";
import Card from "./components/card";
import energy from "../assets/icon/energy.png";
import boost from "../assets/icon/boost.png";
import EnergyBoost from "./components/boostenergy";

export default function App() {
  const coins = useStore((state: { coins: any }) => state.coins);
  const setCoins = useStore((state) => state.setCoin);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 7}deg) rotateY(${
      x / 7
    }deg)`;
    setTimeout(() => {
      card.style.transform = "";
    }, 100);
    setCoins(2);
  };
  const apicall = async () => {
    console.log(coins);
    if (coins % 5 === 0) {
      const response = await axios.post("http://localhost:3002/usercoin", {
        userid: "sahil",
        coin: coins,
      });
      if (response.data.status === 201) {
        console.log("coins updates");
      } else {
        console.log("coins not updated");
      }
    }
  };

  useEffect(() => {
    apicall();
  }, [coins]);

  return (
    <Grid sx={mainBox}>
      <Grid
        container
        lg={12}
        gap={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "4.5rem",
        }}
      >
        <Grid item lg={6} sx={equitybox("#458BEB")}>
          <Typography sx={{ color: "#C9C9C9" }}>Equity Balance</Typography>
          <Typography sx={typographyequity}>$26,000.456</Typography>
          <Box sx={colorBorder("#458BEB")} />
        </Grid>
        <Grid item lg={6} sx={equitybox("#DCAB38")}>
          <Typography sx={{ color: "#C9C9C9" }}>Profit & Loss</Typography>
          <Typography sx={typographyProfit}>
            <img
              src={dollarCoin.src}
              alt="Dollar Coin"
              style={{ width: "20px", height: "18px" }}
            />
            +443.6464k
          </Typography>
          <Box sx={colorBorder("#dcab38")} />
        </Grid>
      </Grid>
      <Grid
        container
        lg={12}
        gap={3.3}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "3rem" }}
      >
        <Grid lg={4}>
          <Card image={dailyAttendance} name="Daily Attendance" />
        </Grid>
        <Grid lg={4}>
          <Card image={dailyQuiz} name="Daily Quiz" />
        </Grid>
        <Grid lg={4}>
          <Card image={secretCode} name="Secret Key" />
        </Grid>
      </Grid>
      <Grid sx={innerbox}>
        <div
          style={
            {
              // display: "flex",
              // flexDirection: "column",
              // width: "100dvw",
              // justifyContent: "center",
              // alignItems: "center",
              // height: "100dvh",
            }
          }
        >
          {/* ***** preserve ***** */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "4rem",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <img
                src={dollarCoin.src}
                alt="Dollar Coin"
                style={{ width: "40px", height: "40px" }}
              />
              <p style={{ fontSize: "30px", color: "#ffffff" }}>{coins}</p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={outercircleCharacter} onClick={handleCardClick}>
              <div style={innercircleCharacter}>
                <div>
                  <img
                    src={goat.src}
                    alt="Main Character"
                    style={{ height: "216px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* ***** preserve ***** */}
        </div>
      </Grid>
      <Grid container  justifyContent="space-between" sx={{padding:"0 2rem"}}>
        <Grid><EnergyBoost image = {energy} name = "4000/4000"/></Grid>
        <Grid><EnergyBoost image = {boost} name = "boost"/></Grid>
      </Grid>
    </Grid>
  );
}

const innerbox = {
  backgroundImage: `url(${image.src})`,
  backgroundSize: "contain",
  // position: "absolute",
  // top: "10rem",
  width: "100vw",
  height: "45vh",
  overflow: "hidden",
};
const mainBox = {
  width: "100vw",
  height: "100vh",
  /* background-color: black; */
  background:
    "linear-gradient(to bottom, #000000 22%, #1f344c 50%, #000000 90%)",
};

const equitybox = (color: any) => ({
  backgroundColor: "#222222",
  width: "151px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
  borderRadius: "4px",
  border: `.0001px solid ${color}`,
});

const colorBorder = (color: any) => ({
  position: "absolute",
  bottom: "-3px",
  height: "50px",
  width: "70px",
  borderBottom: `3px solid ${color}`,
  borderRadius: "2px",
});

const typographyequity = {
  color: "#458BEB",
  fontSize: "12px",
  marginTop: "1px",
};

const typographyProfit = {
  display: "flex",
  alignItems: "center",
  gap: ".3rem",
  color: "#ffffff",
  fontSize: "12px",
};

const innercircleCharacter = {
  width: "200px",
  height: "200px",
  padding: "1rem",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "radial-gradient(circle,#2c63ae,#1f344c)",
  overflow: "hidden",
};

const outercircleCharacter = {
  width: "224px",
  height: "224px",
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: "#426eab",
  display: "grid",
  placeItems: "center",
};

