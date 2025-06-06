import { FirebaseAnalyticsProvider } from "@/analytics/providers/firebase/Firebase"
import type { Provider } from "@/analytics/providers/Provider"
import { useState, useEffect, useMemo } from "react"
import type { AnalyticsContextType } from "../types"
import { AnalyticsContext } from "../context/analytics-context"

export const AnalyticsReactProvider = ({ children }: { children: React.ReactNode }) => {
  const [analytics] = useState<Provider>(new FirebaseAnalyticsProvider())
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const check = () => {
      if (analytics.isReady()) {
        // Only set state if it's not already ready to prevent unnecessary re-renders
        setIsReady(prev => prev ? prev : true)
      } else {
        analytics.initialize()
      }
    }

    check()
  }, [analytics]) // Remove isReady from dependencies, add analytics

  // Memoize the context value to prevent unnecessary re-renders
  const value: AnalyticsContextType = useMemo(() => ({
    isReady,
    trackEvent: analytics.trackEvent,
    trackPageView: analytics.trackPageView,
    trackClick: analytics.trackPageView,
  }), [isReady, analytics.trackEvent, analytics.trackPageView])

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}
