import { type ReactElement } from 'react';

import { type AsyncBoundaryPropsModel } from '#lib-frontend/core/containers/AsyncBoundary/AsyncBoundary.models';
import { type ChildrenPropsModel } from '#lib-frontend/core/core.models';
import { type UseQueryModel } from '#lib-frontend/data/hooks/useQuery/useQuery.models';
import { type NilModel } from '#lib-shared/core/core.models';
import { type WithIdModel } from '#lib-shared/core/utils/withId/withId.models';

export type DataBoundaryPropsModel<TType> = Omit<AsyncBoundaryPropsModel, 'children'> &
  WithIdModel &
  Pick<UseQueryModel<TType>, 'query'> &
  ChildrenPropsModel<(props: { data?: TType | null }) => ReactElement | NilModel>;
