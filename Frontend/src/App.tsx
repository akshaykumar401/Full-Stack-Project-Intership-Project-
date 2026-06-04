import { Hero, Contact } from "./pages";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, [window.location.pathname]);

  return (
    pathname === '/' ? <><Header /><Hero /><Contact /><Footer /></> : <Outlet />
  )
}

export default App