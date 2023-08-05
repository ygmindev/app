import { type SignInFormPropsModel } from '#lib-frontend/auth/containers/SignInForm/SignInForm.models';
import { type PagePropsModel } from '#lib-frontend/core/core.models';
import { type LocationParamsModel } from '#lib-frontend/route/route.models';

export type SignInPagePropsModel = PagePropsModel & Pick<SignInFormPropsModel, 'mode' | 'method'>;

export type SignInPageParamsModel = LocationParamsModel & Pick<SignInFormPropsModel, 'redirectTo'>;
