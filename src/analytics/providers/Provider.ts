import type { EventParameters } from "../events";

export abstract class Provider {
  constructor() {
    Object.getOwnPropertyNames(Object.getPrototypeOf(this))
      .filter(name => name !== 'constructor' && typeof this[name as keyof this] === 'function')
      .forEach(name => {
        const key = name as keyof this;
        this[key] = (this[key] as any).bind(this);
      });
  }

  abstract isReady(): boolean;
  
  abstract trackEvent(eventName: string, parameters: EventParameters): void;

  abstract initialize(): void;

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
}
