import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithIconPropsModel } from '@lib/frontend/core/decorators/withIconProps/withIconProps.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { PagePropsModel } from '@lib/frontend/routing/components/Page/Page.models';
import type { _RouteModel } from '@lib/frontend/routing/containers/Router/_Router.models';
import type { ComponentType } from 'react';

export interface RouterPropsModel {
  routes: Array<PagePropsModel>;
}

export interface RouteModel extends WithIconPropsModel, _RouteModel {
  Layout?: ComponentType<WithChildrenPropsModel>;
  isProtected?: boolean;
  title?: TranslationTextModel;
}
