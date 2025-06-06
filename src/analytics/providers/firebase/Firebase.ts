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
  private _isInitializing: boolean = false;
  private _initializationPromise: Promise<void> | null = null;

  constructor() {
    this.instance = null;
    try {
      this.app = initializeApp(firebaseConfig);
    } catch (error) {
      console.error("Failed to initialize Firebase app:", error);
      throw error;
    }
  }

  isReady(): boolean {
    return this.instance !== null && !this._isInitializing;
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

  async initialize(): Promise<void> {
    this._isInitializing = true;

    this._initializationPromise = (async () => {
      try {
        if (typeof window === 'undefined') {
          console.warn("Firebase Analytics not available in server environment");
          return;
        }

        const supported = await isSupported();
        console.log("Analytics supported:", supported);

        if (!supported) {
          console.warn("Firebase Analytics is not supported in this environment");
          return;
        }

        if (!firebaseConfig.measurementId) {
          console.error("measurementId is missing from Firebase config");
          return;
        }

        const analytics = getAnalytics(this.app);
        this.instance = analytics;
        console.log("Firebase Analytics initialized successfully");

      } catch (error: unknown) {
        if (error instanceof Error) {
          const firebaseError: FirebaseStartupError = {
            name: error.name,
            message: error.message,
            stack: error.stack,
          };
          console.error("Firebase Analytics initialization error:", firebaseError);
        } else {
          console.error("Unexpected error during Firebase Analytics initialization:", error);
          console.error("Error details:", {
            name: "UnknownError",
            message: String(error),
            stack: (error as { stack?: string }).stack || "No stack trace available",
          });
        }
      } finally {
        this._isInitializing = false;
      }
    })();

    return this._initializationPromise;
  }
}
