import type {
  TestComponentModel,
  WithTestComponentModel,
  WithTestComponentParamsModel,
} from '@lib/frontend/test/utils/withTestComponent/withTestComponent.models';
import type { PartialModel } from '@lib/shared/core/core.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { trim } from 'lodash';
import type { ComponentType } from 'react';
import { createElement } from 'react';

export const withTestComponent = <
  TProps,
  TDefault extends PartialModel<TProps> = PartialModel<TProps>,
>({
  defaultProps,
  displayName,
  target,
}: WithTestComponentParamsModel<TProps, TDefault>): WithTestComponentModel<TProps, TDefault> => {
  const testID = uid('withTestComponent');
  const _displayName = displayName || target.displayName || target.name || uid('displayName');
  const Component: TestComponentModel<TProps, TDefault> = (props) =>
    createElement(
      target as ComponentType<TProps & object>,
      { testID, ...defaultProps, ...props } as unknown as TProps & object,
    );
  return { Component, displayName: trim(_displayName, '_'), testID };
};
