import {
  type ToComponentClassModel,
  type ToComponentClassParamsModel,
} from '@lib/frontend/core/utils/toComponentClass/toComponentClass.models';
import { type ReactElement } from 'react';
import { Component, createElement } from 'react';

export const toComponentClass = <TProps,>(
  params: ToComponentClassParamsModel<TProps>,
): ToComponentClassModel<TProps> =>
  class extends Component<TProps> {
    render(): ReactElement<TProps> {
      return createElement(params, this.props);
    }
  };
