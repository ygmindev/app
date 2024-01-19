import admin from 'firebase-admin';
import toString from 'lodash/toString';

import { type _JwtServiceModel } from '@lib/backend/auth/utils/JwtService/_JwtService.models';
import { SIGN_IN_TOKEN_CLAIM_KEYS } from '@lib/shared/auth/resources/SignIn/SignIn.constants';
import { type SignInTokenModel } from '@lib/shared/auth/resources/SignIn/SignIn.models';
import { pick } from '@lib/shared/core/utils/pick/pick';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export class _JwtService implements _JwtServiceModel {
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

  createToken = async (_id: string, claims: EntityResourceDataModel<UserModel>): Promise<string> =>
    admin.auth().createCustomToken(toString(_id), claims);

  verifyToken = async (token: string): Promise<SignInTokenModel> => {
    const decoded = await admin.auth().verifyIdToken(token);
    return {
      _id: decoded.uid,
      claims: {
        ...((decoded.additionalClaims as EntityResourceDataModel<UserModel>) ?? {}),
        ...pick(decoded, SIGN_IN_TOKEN_CLAIM_KEYS),
      },
    };
  };
}
