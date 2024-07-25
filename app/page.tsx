import type { Metadata } from "next";
import App from "./components/dashboard/page";

export default function IndexPage() {
  return <App />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
