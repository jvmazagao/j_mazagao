import { isSupported, getAnalytics, type Analytics, logEvent } from "firebase/analytics";
import { initializeApp, type FirebaseApp } from "firebase/app";
import { firebaseConfig } from "@/analytics/providers/firebase/config";
import type { Provider } from "@/analytics/providers/Provider";
import type { EventParameters } from "@/analytics/events";

export class FirebaseAnalyticsProvider implements Provider {
  private instance: Analytics | null;
  private app: FirebaseApp;
  private _isInitializing: boolean = false;
  private _initializationPromise: Promise<boolean> | null = null;

  constructor() {
    this.instance = null;
    try {
      this.app = initializeApp(firebaseConfig);
    } catch (error) {
      console.error("Failed to initialize Firebase app:", error);
      throw error;
    }
  }

  isReady() {
    return this.instance !== null && !this._isInitializing;
  }

  trackEvent(eventName: string, parameters: EventParameters) {
    try {
      if (this?.isReady() && this.instance) {
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

  async initialize() {
    if (this._initializationPromise) {
      return this._initializationPromise;
    }

    this._isInitializing = true;
    this._initializationPromise = (async () => {
      try {
        const supported = await isSupported();

        if (!supported) {
          console.warn("Firebase Analytics not supported");
          this._isInitializing = false;
          return false;
        }

        this.instance = getAnalytics(this.app); // getAnalytics(app)
        console.log("Firebase Analytics initialized successfully");
        return true;
      } catch (error) {
        console.error("Firebase Analytics initialization error:", error);
        return false;
      } finally {
        this._isInitializing = false;
      }
    })();

    return this._initializationPromise;
  }
}
