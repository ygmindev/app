import { type _JwtImplementationModel } from '@lib/backend/auth/utils/JwtImplementation/_JwtImplementation.models';
import { AuthTokenError } from '@lib/shared/auth/errors/AuthTokenError/AuthTokenError';
import { SIGN_IN_TOKEN_CLAIM_KEYS } from '@lib/model/auth/SignIn/SignIn.constants';
import { type SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { OfflineError } from '@lib/shared/http/errors/OfflineError/OfflineError';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';
import { type AuthError } from 'firebase/auth';
import admin from 'firebase-admin';
import toString from 'lodash/toString';

export class _JwtImplementation implements _JwtImplementationModel {
  constructor() {
    !admin.apps.length &&
      admin.initializeApp({
        credential: admin.credential.cert({
          clientEmail: process.env.SERVER_FIREBASE_ADMIN_EMAIL,
          privateKey: process.env.SERVER_FIREBASE_ADMIN_SECRET.replace(/\\n/gm, '\n'),
          projectId: process.env.SERVER_FIREBASE_ADMIN_PROJECT_ID,
        }),
      });
  }

  createToken = async (_id: string, claims: PartialModel<UserModel>): Promise<string> =>
    admin.auth().createCustomToken(toString(_id), claims);

  verifyToken = async (token: string): Promise<SignInTokenModel | null> => {
    try {
      const decoded = await admin.auth().verifyIdToken(token);
      return {
        _id: decoded.uid,
        claims: {
          ...((decoded.additionalClaims as PartialModel<UserModel>) ?? {}),
          ...pick(decoded, SIGN_IN_TOKEN_CLAIM_KEYS),
        },
      };
    } catch (e) {
      switch ((e as AuthError).code) {
        case 'auth/id-token-expired':
          throw new AuthTokenError();
        case 'auth/argument-error':
          throw new OfflineError();
        default:
          throw e;
      }
    }
  };
}
