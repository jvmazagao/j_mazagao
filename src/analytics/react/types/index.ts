import type { EventParameters } from "@/analytics/events";

export type AnalyticsContextType = {
    isReady: boolean;
    trackEvent: (eventName: string, parameters: EventParameters) => void;
    trackPageView: (title: string, location: string) => void;
    trackClick: (element: string, location: string) => void;
};
