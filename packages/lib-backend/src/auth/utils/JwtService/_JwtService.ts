import { SIGN_IN_TOKEN_CLAIM_FIELDS } from '@lib/backend/auth/resources/SignIn/SignIn.constants';
import type { _JwtServiceModel } from '@lib/backend/auth/utils/JwtService/_JwtService.models';
import type { SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import type { EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';
import admin from 'firebase-admin';
import { pick, toString } from 'lodash';

const SERVER_FIREBASE_ADMIN_PROJECT_ID = getEnv('SERVER_FIREBASE_ADMIN_PROJECT_ID');
const SERVER_FIREBASE_ADMIN_SECRET = getEnv('SERVER_FIREBASE_ADMIN_SECRET').replace(/\\n/g, '\n');
const SERVER_FIREBASE_ADMIN_EMAIL = getEnv('SERVER_FIREBASE_ADMIN_EMAIL');

admin.apps.length ||
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: SERVER_FIREBASE_ADMIN_EMAIL,
      privateKey: SERVER_FIREBASE_ADMIN_SECRET,
      projectId: SERVER_FIREBASE_ADMIN_PROJECT_ID,
    }),
  });

export const _JwtService: _JwtServiceModel = {
  createToken: async (_id: string, claims: EntityResourceDataModel<UserModel>): Promise<string> =>
    admin.auth().createCustomToken(toString(_id), claims),

  verifyToken: async (token: string): Promise<SignInTokenModel> => {
    const decoded = await admin.auth().verifyIdToken(token);
    return {
      _id: decoded.uid,
      claims: {
        ...(decoded.additionalClaims || {}),
        ...pick(decoded, SIGN_IN_TOKEN_CLAIM_FIELDS),
      },
    };
  },
};
