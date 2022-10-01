import type { WithIconModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { TranslationTextModel } from '@lib/frontend/locale/locale.models';
import type { PageModel } from '@lib/frontend/routing/components/Page/Page.models';
import type { ComponentType, ReactElement } from 'react';

export interface RouterPropsModel {
  routes: Array<PageModel>;
}

export interface RouteModel extends WithIconModel {
  Layout?: ComponentType<WithChildrenPropsModel>;
  element?: ReactElement;
  pathname: string;
  routes?: Array<RouteModel>;
  title?: TranslationTextModel;
}
