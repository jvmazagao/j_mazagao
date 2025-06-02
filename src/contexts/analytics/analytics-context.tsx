import React, { createContext, useContext, useEffect, useState } from 'react';
import { analytics } from '@/infra/firebase/config';
import { logEvent } from 'firebase/analytics';

type AnalyticsContextType = {
    isReady: boolean;
    trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
    trackPageView: (title: string, location: string) => void;
    trackClick: (element: string, location: string) => void;
};

const AnalyticsContext = createContext<AnalyticsContextType>({
    isReady: false,
    trackEvent: () => {},
    trackPageView: () => {},
    trackClick: () => {},
});

export const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkAnalytics = () => {
      if (analytics && typeof analytics.app !== 'undefined') {
        setIsReady(true);
      } else {
        setTimeout(checkAnalytics, 100);
      }
    };
    checkAnalytics();
  }, []);

  const trackEvent = (eventName: string, parameters = {}) => {
    if (isReady && analytics) {
      try {
        logEvent(analytics, eventName, parameters);
      } catch (error) {
        console.error('Analytics tracking error:', error);
      }
    }
  };

  const value: AnalyticsContextType = {
    isReady,
    trackEvent,
    trackPageView: (title: string, location: string) => trackEvent('page_view', { page_title: title, page_location: location }),
    trackClick: (element: string, location: string) => trackEvent('button_click', { button_name: element, page_location: location })
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within AnalyticsProvider');
  }
  return context;
};