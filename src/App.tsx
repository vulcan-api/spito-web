import { useLocation, useRoutes } from "react-router-dom";
import Header from "./Layout/Header";
import { ThemeProvider } from "./components/theme-provider";
import { cloneElement } from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";

export default function App(): JSX.Element | null {
  const element = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "download",
      element: <div>download</div>,
    },
    {
      path: "marketplace",
      element: <div>marketplace</div>,
    },
  ]);

  const location = useLocation();
  if (!element) return null;

  return (
    <ThemeProvider>
      <Header />
      {cloneElement(element, { key: location.pathname })}
    </ThemeProvider>
  );
}
