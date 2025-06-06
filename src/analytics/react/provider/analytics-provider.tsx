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
        await analytics.initialize()
        setIsReady(analytics?.isReady())
      } catch (error) {
        console.error('Analytics error:', error)
      }
    }

    check()
  }, [analytics, isReady])

  const value: AnalyticsContextType = useMemo(() => ({
    isReady: analytics?.isReady(),
    trackEvent: analytics?.trackEvent,
    trackPageView: analytics?.trackPageView,
    trackClick: analytics?.trackPageView,
  }), [analytics])

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}
