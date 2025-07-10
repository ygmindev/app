import {
  type _UseAuthModel,
  type _UseAuthParamsModel,
} from '@lib/frontend/auth/hooks/useAuth/_useAuth.models';
import { OfflineError } from '@lib/shared/http/errors/OfflineError/OfflineError';
import auth from '@react-native-firebase/auth';
import { type FirebaseAuthTypes } from '@react-native-firebase/auth';
import { type AuthError } from 'firebase/auth';
import { useEffect } from 'react';

export const _auth = auth();

export const _useAuth = ({
  onAuthenticate,
  onError,
  onTokenRefresh,
}: _UseAuthParamsModel): _UseAuthModel =>
  useEffect(() => {
    const unsubscribeOnAuthStateChanged = _auth.onIdTokenChanged(
      (user: FirebaseAuthTypes.User | null) => void user?.getIdToken(true).then(onTokenRefresh),
    );

    const unsubscribeOnIdTokenChanged = _auth.onAuthStateChanged(
      (user: FirebaseAuthTypes.User | null) => {
        user
          ? user
              .getIdTokenResult(true)
              .then(({ claims, token }) => onAuthenticate(claims, token))
              .catch((e) => {
                const error =
                  (e as AuthError).code === 'auth/network-request-failed'
                    ? new OfflineError()
                    : (e as Error);
                onError(error);
              })
          : void onAuthenticate(undefined);
      },
    );
    return () => {
      unsubscribeOnAuthStateChanged();
      unsubscribeOnIdTokenChanged();
    };
  }, []);
