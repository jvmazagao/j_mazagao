
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported, type Analytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

let analytics: Analytics | null = null;

const initializeAnalytics = async () => {
  try {
    const supported = await isSupported();
    console.log('Analytics supported:', supported);
    
    if (!supported) {
      console.warn('Firebase Analytics is not supported in this environment');
      return null;
    }

    if (!firebaseConfig.measurementId) {
      console.error('measurementId is missing from Firebase config');
      return null;
    }

    analytics = getAnalytics(app);
    
    return analytics;
  } catch (error: any) {
    console.error('Failed to initialize Firebase Analytics:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    return null;
  }
};

initializeAnalytics();

export { analytics };
export default app;