import { hapticFeedbackImpactOccurred } from "@/shared/libs";
import "@/shared/styles/index.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import WebApp from "@twa-dev/sdk";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const WHITE_COLOR = "#ffffff";

WebApp.ready();
WebApp.expand();
WebApp.SettingsButton.show();
WebApp.setHeaderColor(WHITE_COLOR);
WebApp.setBackgroundColor(WHITE_COLOR);
WebApp.enableClosingConfirmation();
WebApp.disableVerticalSwipes();
hapticFeedbackImpactOccurred();

createRoot(document.getElementById("afl-app")!).render(<App />);
