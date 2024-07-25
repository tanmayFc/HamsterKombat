import type { Metadata } from "next";
import LandingPage from "./components/Home/page";

export default function IndexPage() {
  return <LandingPage />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
