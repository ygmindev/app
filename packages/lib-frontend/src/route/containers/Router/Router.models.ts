import type { _RouterPropsModel } from '@lib/frontend/route/containers/Router/_Router.models';

export interface RouterPropsModel extends Omit<_RouterPropsModel, 'depth'> {}
