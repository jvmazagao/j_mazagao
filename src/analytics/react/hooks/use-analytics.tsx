import { useContext } from "react";
import { AnalyticsContext } from "../context/analytics-context";

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within AnalyticsProvider');
  }
  return context;
};
