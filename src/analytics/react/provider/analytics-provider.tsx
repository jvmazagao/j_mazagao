import { FirebaseAnalyticsProvider } from "@/analytics/providers/firebase/Firebase"
import type { Provider } from "@/analytics/providers/Provider"
import { useState, useEffect } from "react"
import type { AnalyticsContextType } from "../types"
import { AnalyticsContext } from "../context/analytics-context"

export const AnalyticsReactProvider = ({ children}: { children: React.ReactNode}) => {

  const [analytics, ] = useState<Provider>(new FirebaseAnalyticsProvider())
  const [isReady, setIsReady] = useState(false)


  useEffect(() => {
    const check = () => {
      if(analytics.isReady()) {
        setIsReady(true)
      } else {
        analytics.initialize()
        setTimeout(check, 100)
      }
    }
    check()
  }, [isReady])

  const value: AnalyticsContextType = {
    isReady,
    trackEvent: analytics.trackEvent,
    trackPageView: analytics.trackPageView,
    trackClick: analytics.trackPageView,
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}
