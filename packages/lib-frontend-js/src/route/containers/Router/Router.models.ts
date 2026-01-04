import { type RootContextPropsModel } from '@lib/frontend/root/root.models';
import { type _RouterPropsModel } from '@lib/frontend/route/containers/Router/_Router.models';

export type RouterPropsModel = Pick<_RouterPropsModel, 'routes'> & RootContextPropsModel;
