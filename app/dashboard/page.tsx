"use client";
import { setCoins } from "@/lib/features/counter/profileSlice";
import { RootState } from "@/lib/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const page = () => {
  const coins = useSelector((state: RootState) => state.profile.coins);
  const dispatch = useDispatch();

  const handleClick = async () => {
     dispatch(setCoins(2));
  };
  const apicall =async ()=>{
    console.log(coins)
    if(coins%5===0){
        const response = await axios.post("http://localhost:3002/usercoin",{userid:"sahil",coin :coins});
        if (response.data.status === 201) {
            console.log("coins updates")
          } else {
            console.log("coins not updated")
          }
    }
  }

  useEffect(()=>{
    apicall()
  },[coins])
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            background: "lightgrey",
            width: "5vw",
            height: "5vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "2vw",
          }}
        >
          {coins}
        </div>
        <button onClick={handleClick}>add 2</button>
      </div>
    </>
  );
};

export default page;
