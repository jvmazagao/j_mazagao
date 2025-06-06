import { FirebaseAnalyticsProvider } from "@/analytics/providers/firebase/Firebase"
import type { Provider } from "@/analytics/providers/Provider"
import { useState, useEffect, useMemo } from "react"
import type { AnalyticsContextType } from "../types"
import { AnalyticsContext } from "../context/analytics-context"

export const AnalyticsReactProvider = ({ children }: { children: React.ReactNode }) => {
  const [analytics, setAnalytics] = useState<Provider | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if(isReady) {
      return
    }

    const check = () => {
      try {
        if (analytics?.isReady()) {
          setIsReady(true)
        } else {
          const provider = new FirebaseAnalyticsProvider()
          provider.initialize()
          setAnalytics(provider)
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
