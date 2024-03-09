import { useLocation, useRoutes } from "react-router-dom";
import Header from "./Layout/Header";
import { ThemeProvider } from "./components/theme-provider";
import { cloneElement } from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Footer from "./Layout/Footer";
import Download from "./Pages/Download/Download";
import Marketplace from "./Pages/Marketplace/Marketplace";

export default function App(): JSX.Element | null {
  const element = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "download",
      element: <Download />,
    },
    {
      path: "marketplace",
      element: <Marketplace />,
    },
  ]);

  const location = useLocation();
  if (!element) return null;

  return (
    <ThemeProvider>
      <Header />
      {cloneElement(element, { key: location.pathname })}
      <Footer />
    </ThemeProvider>
  );
}
