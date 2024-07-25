"use client";
import {
  setIsLogin,
  setUserId
} from "@/lib/features/counter/profileSlice";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function LandingPage() {
  const router = useRouter();

  return (
    <div>
      
    </div>
  );
};
