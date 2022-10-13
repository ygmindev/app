import type { AuthorizeParamsModel } from '@lib/backend/auth/utils/authorize/authorize.models';
import { ACCESS_ROLE } from '@lib/shared/auth/resources/Access/Access.constants';
import { warn } from '@lib/shared/logging/utils/logger/logger';

export const authorize = async ({ context, roles }: AuthorizeParamsModel): Promise<boolean> => {
  warn(context);
  warn(roles);
  return roles
    ? roles.includes(ACCESS_ROLE.USER)
      ? context.user !== undefined
      : roles.includes(ACCESS_ROLE.ANY)
    : false;
};

// import type { AuthorizeParamsModel } from '@lib/backend/auth/utils/authorize/authorize.models';
// import { ACCESS_ROLE } from '@lib/shared/auth/resources/Access/Access.constants';

// export const authorize = async ({ context, roles }: AuthorizeParamsModel): Promise<boolean> =>
//   roles
//     ? roles.includes(ACCESS_ROLE.USER)
//       ? context.user !== undefined
//       : roles.includes(ACCESS_ROLE.ANY)
//     : false;
