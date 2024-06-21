import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Wishlist from "./pages/Wishlist";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "This is the home page";
        break;
      case "/analytics":
        title = "Analytics";
        metaDescription = "This is the analytics page";
        break;
      case "/wishlist":
        title = "Wishlist";
        metaDescription = "This is the wishlist page";
        break;
      case "/chat":
        title = "Chat";
        metaDescription = "This is the chat page";
        break;
      case "/profile":
        title = "Profile";
        metaDescription = "This is the profile page";
        break;
      case "/settings":
        title = "Settings";
        metaDescription = "This is the settings page";
        break;
      default:
        title = "Dashboard";
        metaDescription = "This is the dashboard page";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
