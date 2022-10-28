import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithIconPropsModel } from '@lib/frontend/core/decorators/withIconProps/withIconProps.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { PageModel } from '@lib/frontend/routing/components/Page/Page.models';
import type { ComponentType, ReactElement } from 'react';

export interface RouterPropsModel {
  routes: Array<PageModel>;
}

export interface RouteModel extends WithIconPropsModel {
  Layout?: ComponentType<WithChildrenPropsModel>;
  element?: ReactElement;
  pathname: string;
  routes?: Array<RouteModel>;
  title?: TranslationTextModel;
}
