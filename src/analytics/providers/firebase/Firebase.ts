import {
  isSupported,
  getAnalytics,
  type Analytics,
  logEvent,
} from "firebase/analytics";
import { initializeApp, type FirebaseApp } from "firebase/app";
import { firebaseConfig } from "@/analytics/providers/firebase/config";
import type { Provider } from "@/analytics/providers/Provider";
import type { EventParameters } from "@/analytics/events";
import type { FirebaseStartupError } from "@/analytics/providers/firebase/errors";

export class FirebaseAnalyticsProvider implements Provider {
  private instance: Analytics | null;
  private app: FirebaseApp;

  constructor() {
    this.instance = null;
    this.app = initializeApp(firebaseConfig)
  }

  isReady() {
    console.log(this,this?.instance, this?.instance?.app)
    if (this.instance && this.instance?.app) {
      return true;
    }

    return false;
  }

  trackEvent(eventName: string, parameters: EventParameters) {
    try {
      if(this.isReady() && this.instance) {
        logEvent(this.instance, eventName, parameters);
      }
    } catch (error) {
      console.error("Analytics error: ", error);
    }
  }

  trackPageView(title: string, location: string) {
    this.trackEvent("page_view", {
      page_title: title,
      page_location: location,
    });
  }

  trackClick(element: string, location: string) {
    this.trackEvent("button_click", {
      button_name: element,
      page_location: location,
    });
  }

  async initialize() {
    try {
      const supported = await isSupported();
      console.log("Analytics supported:", supported);

      if (!supported) {
        console.warn("Firebase Analytics is not supported in this environment");
        return null;
      }

      if (!firebaseConfig.measurementId) {
        console.error("measurementId is missing from Firebase config");
        return null;
      }

      const analytics = getAnalytics(this.app);

      this.instance = analytics
    } catch (error: unknown) {
      if (error instanceof Error) {
        const firebaseError: FirebaseStartupError = {
          name: error.name,
          message: error.message,
          stack: error.stack,
        };
        console.error(
          "Firebase Analytics initialization error:",
          firebaseError
        );
      } else {
        console.error(
          "Unexpected error during Firebase Analytics initialization:",
          error
        );
        console.error("Error details:", {
          name: "UnknownError",
          message: String(error),
          stack:
            (error as { stack?: string }).stack || "No stack trace available",
        });
      }
    }
  }
}
