import { isSupported, getAnalytics, type Analytics, logEvent } from "firebase/analytics";
import { initializeApp, type FirebaseApp } from "firebase/app";
import { firebaseConfig } from "@/analytics/providers/firebase/config";
import { Provider } from "@/analytics/providers/Provider";
import type { EventParameters } from "@/analytics/events";

export class FirebaseAnalyticsProvider extends Provider {
  private instance: Analytics | null = null;
  private app: FirebaseApp;

  constructor() {
    super();
    try {
      this.app = initializeApp(firebaseConfig);
    } catch (error) {
      console.error("Failed to initialize Firebase app:", error);
      throw error;
    }
  }

  isReady() {
    return this.instance !== null;
  }

  trackEvent(eventName: string, parameters: EventParameters) {
    try {
      if (this.isReady() && this.instance) {
        logEvent(this.instance, eventName, parameters);
      } else {
        console.warn("Analytics not ready, skipping event:", eventName);
      }
    } catch (error) {
      console.error("Analytics error: ", error);
    }
  }

  async initialize() {
    try {
      const supported = await isSupported();
      if (!supported) {
        console.warn("Firebase Analytics not supported");
        return false;
      }

      this.instance = getAnalytics(this.app);
      console.log("Firebase Analytics initialized successfully");
      return true;
    } catch (error) {
      console.error("Firebase Analytics initialization error:", error);
      return false;
    }
  }
}
