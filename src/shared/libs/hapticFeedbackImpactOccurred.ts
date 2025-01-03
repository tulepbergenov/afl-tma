import WebApp from "@twa-dev/sdk";

export const hapticFeedbackImpactOccurred = () => {
  WebApp.HapticFeedback.impactOccurred("heavy");
};
