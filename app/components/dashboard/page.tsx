"use client";
import {
  setIsLogin,
} from "@/lib/features/counter/profileSlice";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";


function Dashboard() {

  const socket = io("http://192.168.125.123:3002/usercoin");

  const [val, useval] = 

  socket.emit

  return (<>

    </>)
}

export default Dashboard