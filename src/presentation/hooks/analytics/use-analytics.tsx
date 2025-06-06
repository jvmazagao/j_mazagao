import { logEvent } from 'firebase/analytics';
import { analytics } from '@/infra/firebase/config';

export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters = {}) => {
    if (analytics) {
      logEvent(analytics, eventName, parameters);
    }
  };

  const trackPageView = (page_title: string, page_location: string) => {
    trackEvent('page_view', {
      page_title,
      page_location
    });
  };

  const trackButtonClick = (button_name: string, page_location: string) => {
    trackEvent('button_click', {
      button_name,
      page_location
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackButtonClick
  };
};