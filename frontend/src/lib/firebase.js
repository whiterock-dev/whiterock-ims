import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const defaultConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? defaultConfig.apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? defaultConfig.authDomain,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? defaultConfig.projectId,
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? defaultConfig.appId,
};

let app = null;
let authInstance = null;

if (config.projectId && config.apiKey) {
  try {
    app = initializeApp(config);
    authInstance = getAuth(app);
  } catch (e) {
    console.error('Firebase init failed', e);
  }
}

export const auth = authInstance;
export default app;
