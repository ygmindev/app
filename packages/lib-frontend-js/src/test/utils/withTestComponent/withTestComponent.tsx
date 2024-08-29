import { getComponentDisplayName } from '@lib/frontend/core/utils/getComponentDisplayName/getComponentDisplayName';
import {
  type TestComponentModel,
  type WithTestComponentModel,
  type WithTestComponentParamsModel,
} from '@lib/frontend/test/utils/withTestComponent/withTestComponent.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import trim from 'lodash/trim';
import { type ComponentType } from 'react';
import { createElement } from 'react';

export const withTestComponent = <
  TProps,
  TDefault extends PartialModel<TProps> = PartialModel<TProps>,
>({
  defaultProps,
  displayName,
  target,
  testID,
}: WithTestComponentParamsModel<TProps, TDefault>): WithTestComponentModel<TProps, TDefault> => {
  const testIDF = testID ?? uid('withTestComponent');
  const displayNameF = displayName ?? getComponentDisplayName(target as ComponentType);
  const Component: TestComponentModel<TProps, TDefault> = (props) =>
    createElement(
      target as ComponentType<TProps & object>,
      { testID: testIDF, ...defaultProps, ...props } as unknown as TProps & object,
    );
  return { Component, displayName: trim(displayNameF, '_'), testID: testIDF };
};
