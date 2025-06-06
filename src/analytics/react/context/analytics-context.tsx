import { createContext } from "react";
import type { AnalyticsContextType } from "../types";

export const AnalyticsContext = createContext<AnalyticsContextType>({
    isReady: false,
    trackEvent: () => {},
    trackPageView: () => {},
    trackClick: () => {},
});


