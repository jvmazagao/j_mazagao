import { FirebaseAnalyticsProvider } from "@/analytics/providers/firebase/Firebase"
import type { Provider } from "@/analytics/providers/Provider"
import { useState, useEffect, useMemo } from "react"
import type { AnalyticsContextType } from "../types"
import { AnalyticsContext } from "../context/analytics-context"

export const AnalyticsReactProvider = ({ children }: { children: React.ReactNode }) => {
  const [analytics] = useState<Provider | null>(() => {
    try {
      return new FirebaseAnalyticsProvider()
    } catch (error) {
      console.error('Failed to initialize FirebaseAnalyticsProvider:', error)
      return null
    }
  })
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!analytics) {
      console.error('Analytics provider is not available')
      return
    }

    const check = () => {
      try {
        if (analytics.isReady()) {
          setIsReady(true)
        } else {
          analytics.initialize()
          setTimeout(check, 100)
        }
      } catch (error) {
        console.error('Analytics error:', error)
      }
    }

    check()
  }, [analytics])

  const value: AnalyticsContextType = useMemo(() => ({
    isReady: isReady && !!analytics,
    trackEvent: analytics?.trackEvent || (() => console.warn('Analytics not ready')),
    trackPageView: analytics?.trackPageView || (() => console.warn('Analytics not ready')),
    trackClick: analytics?.trackPageView || (() => console.warn('Analytics not ready')),
  }), [isReady, analytics])

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}
