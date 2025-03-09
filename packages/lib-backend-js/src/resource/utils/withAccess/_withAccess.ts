import {
  type _WithAccessModel,
  type _WithAccessParamsModel,
} from '@lib/backend/resource/utils/withAccess/_withAccess.models';
import { Authorized } from 'type-graphql';

export const _withAccess = (roles: _WithAccessParamsModel): _WithAccessModel => Authorized(roles);
