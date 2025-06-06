import type { EventParameters } from "../events";

export interface Provider {
  isReady: () => boolean;
  trackEvent: (eventName: string, parameters: EventParameters) => void;
  trackPageView: (element: string, location: string) => void;
  trackClick: (element: string, location: string) => void;
  initialize: () => void;
}
