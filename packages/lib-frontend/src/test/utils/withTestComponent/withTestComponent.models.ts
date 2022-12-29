import type { ForwardedRefPropsModel } from '@lib/frontend/core/core.models';
import type { TestIdPropsModel } from '@lib/frontend/test/test.models';
import type { PartialModel } from '@lib/shared/core/core.models';
import type {
  WithTestModel,
  WithTestParamsModel,
} from '@lib/shared/test/utils/withTest/withTest.models';
import type { ComponentType } from 'react';

export type WithTestComponentParamsModel<
  TProps,
  TDefault extends PartialModel<TProps> = PartialModel<TProps>,
> = WithTestParamsModel<ComponentType<TProps>> & {
  defaultProps?: TDefault & ForwardedRefPropsModel;
};

export type WithTestComponentModel<
  TProps,
  TDefault extends PartialModel<TProps> = PartialModel<TProps>,
> = Required<TestIdPropsModel> &
  WithTestModel & {
    Component: TestComponentModel<TProps, TDefault>;
  };

export type TestComponentModel<
  TProps,
  TDefault extends PartialModel<TProps> = PartialModel<TProps>,
> = ComponentType<Omit<TProps, keyof TDefault> & PartialModel<TDefault> & TestIdPropsModel>;
