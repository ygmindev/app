import { type ComponentType } from 'react';

import { type RefPropsModel } from '@lib/frontend/core/core.models';
import { type TestIdPropsModel } from '@lib/frontend/test/test.models';
import { type PartialModel, type RequiredModel } from '@lib/shared/core/core.models';
import { type WithTestModel } from '@lib/shared/test/utils/withTest/withTest.models';

export type WithTestComponentParamsModel<
  TProps,
  TDefault extends PartialModel<TProps> = PartialModel<TProps>,
> = {
  defaultProps?: TDefault & RefPropsModel;
  displayName?: string;
  target: ComponentType<TProps>;
};

export type WithTestComponentModel<
  TProps,
  TDefault extends PartialModel<TProps> = PartialModel<TProps>,
> = RequiredModel<TestIdPropsModel> &
  WithTestModel & {
    Component: TestComponentModel<TProps, TDefault>;
  };

export type TestComponentModel<
  TProps,
  TDefault extends PartialModel<TProps> = PartialModel<TProps>,
> = ComponentType<Omit<TProps, keyof TDefault> & PartialModel<TDefault> & TestIdPropsModel>;
