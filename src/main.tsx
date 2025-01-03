import "@/shared/styles/index.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import WebApp from "@twa-dev/sdk";
import { createRoot } from "react-dom/client";
import { App } from "./App";

WebApp.ready();
WebApp.expand();
WebApp.SettingsButton.show();
WebApp.setHeaderColor("#ffffff");
WebApp.setBackgroundColor("#fcf6e2");
WebApp.enableClosingConfirmation();
WebApp.disableVerticalSwipes();

createRoot(document.getElementById("afl-app")!).render(<App />);
