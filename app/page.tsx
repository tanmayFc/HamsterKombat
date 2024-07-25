import type { Metadata } from "next";
import LandingPage from "./components/Home/page";
import App from "./components/dashboard/page";

export default function IndexPage() {
  return <App />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
