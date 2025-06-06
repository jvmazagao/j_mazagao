import { FirebaseAnalyticsProvider } from "@/analytics/providers/firebase/Firebase"
import { useState, useEffect, useMemo } from "react"
import type { AnalyticsContextType } from "../types"
import { AnalyticsContext } from "../context/analytics-context"

export const AnalyticsReactProvider = ({ children }: { children: React.ReactNode }) => {
const [analytics] = useState<FirebaseAnalyticsProvider>(new FirebaseAnalyticsProvider())
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if(isReady) {
      return
    }

    const check = async () => {
      try {
        if (analytics?.isReady()) {
          setIsReady(true)
        } else {
          await analytics.initialize()
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
