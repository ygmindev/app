import type { TranslatableTextPropsModel } from '@lib/frontend/locale/components/TranslatableText/TranslatableText.models';
import type { TranslatableTextModel } from '@lib/frontend/locale/locale.models';
import type { WithIdModel } from '@lib/shared/core/decorators/withId/withId.models';
import type { ReactElement } from 'react';

export interface LocationParamsModel {
  title?: string;
}

export interface LocationModel<TParams extends LocationParamsModel = LocationParamsModel> {
  params?: TParams;
  pathname: string;
}

export interface RouteIdParamsModel extends WithIdModel {}

export interface RouteModel extends Pick<TranslatableTextPropsModel, 'ns'> {
  element?: ReactElement;
  header?: { previous?: string };
  isIndex?: boolean;
  isProtectable?: boolean;
  pathname: string;
  root?: string;
  routes?: Array<RouteModel>;
  title?: TranslatableTextModel;
}

export interface RouteContextModel {
  redirect?: string;
  status?: number;
}

export interface RouteParamsModel<TParams extends LocationParamsModel = LocationParamsModel> {
  context?: RouteContextModel;
  location?: LocationModel<TParams>;
}
