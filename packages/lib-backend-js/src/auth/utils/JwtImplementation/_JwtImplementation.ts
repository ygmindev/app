import { type _JwtImplementationModel } from '@lib/backend/auth/utils/JwtImplementation/_JwtImplementation.models';
import { SIGN_IN_TOKEN_CLAIM_KEYS } from '@lib/model/auth/SignIn/SignIn.constants';
import { type SignInTokenModel } from '@lib/model/auth/SignIn/SignIn.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { AuthTokenError } from '@lib/shared/auth/errors/AuthTokenError/AuthTokenError';
import { type PartialModel } from '@lib/shared/core/core.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { OfflineError } from '@lib/shared/http/errors/OfflineError/OfflineError';
import { type AuthError } from 'firebase/auth';
import admin from 'firebase-admin';

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

  createToken = async (claims: PartialModel<UserModel>): Promise<string> => {
    const uid = claims._id;
    if (uid) {
      return admin.auth().createCustomToken(uid, claims);
    }
    throw new NotFoundError('uid');
  };

  verifyToken = async (token: string): Promise<SignInTokenModel | null> => {
    try {
      const decoded = await admin.auth().verifyIdToken(token);
      return {
        ...((decoded.additionalClaims as SignInTokenModel) ?? {}),
        ...pick(decoded, SIGN_IN_TOKEN_CLAIM_KEYS),
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
