import {
  type _UseAuthModel,
  type _UseAuthParamsModel,
} from '@lib/frontend/auth/hooks/useAuth/_useAuth.models';
import { type SignInTokenModel } from '@lib/model/auth/SignIn/SignIn.models';
import { OfflineError } from '@lib/shared/http/errors/OfflineError/OfflineError';
import { initializeApp } from 'firebase/app';
import { type AuthError, onIdTokenChanged, type User } from 'firebase/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

export const _auth = getAuth(
  initializeApp({
    apiKey: process.env.APP_FIREBASE_API_KEY,
    appId: process.env.APP_FIREBASE_APP_ID,
    authDomain: process.env.APP_FIREBASE_AUTH_DOMAIN,
    messagingSenderId: process.env.APP_FIREBASE_SENDER_ID,
    projectId: process.env.APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.APP_FIREBASE_STORAGE_BUCKET,
  }),
);

export const _useAuth = ({
  onAuthenticate,
  onError,
  onTokenRefresh,
}: _UseAuthParamsModel): _UseAuthModel =>
  useEffect(() => {
    //   process.env.APP_FIREBASE_USE_EMULATOR &&
    //   connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });

    // TODO: from locale
    // useDeviceLanguage(_auth);

    const unsubscribeOnAuthStateChanged = onAuthStateChanged(_auth, (user: User | null) => {
      user
        ? user
            .getIdTokenResult(true)
            .then(({ claims, token }) =>
              onAuthenticate({ _id: user.uid, claims } as SignInTokenModel, token),
            )
            .catch((e) => {
              const error =
                (e as AuthError).code === 'auth/network-request-failed'
                  ? new OfflineError()
                  : (e as Error);
              onError(error);
            })
        : void onAuthenticate(null);
    });

    const unsubscribeOnIdTokenChanged = onIdTokenChanged(
      _auth,
      (user: User | null) => void user?.getIdToken(true).then(onTokenRefresh),
    );

    return () => {
      unsubscribeOnAuthStateChanged();
      unsubscribeOnIdTokenChanged();
    };
  }, []);
