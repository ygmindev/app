import type { WithForwardedRefPropsModel } from '@lib/frontend/core/decorators/withForwardRefProps/withForwardRefProps.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { PartialModel } from '@lib/shared/core/core.models';
import type {
  WithTestModel,
  WithTestParamsModel,
} from '@lib/shared/testing/utils/withTest/withTest.models';
import type { ComponentType } from 'react';

export type WithTestComponentParamsModel<
  TProps,
  TDefault extends PartialModel<TProps> = PartialModel<TProps>,
> = WithTestParamsModel<ComponentType<TProps>> & {
  defaultProps?: TDefault & WithForwardedRefPropsModel;
  displayName?: string;
} & (TProps extends WithTestIdModel ? WithTestIdModel : object);

export type WithTestComponentModel<
  TProps,
  TDefault extends PartialModel<TProps> = PartialModel<TProps>,
> = WithTestModel & {
  Component: TestComponentModel<TProps, TDefault>;
} & (TProps extends WithTestIdModel ? { testID: string } : object);

export type TestComponentModel<
  TProps,
  TDefault extends PartialModel<TProps> = PartialModel<TProps>,
> = ComponentType<Omit<TProps, keyof TDefault> & PartialModel<TDefault> & WithTestIdModel>;
