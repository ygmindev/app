import { type _ContainerProviderPropsModel } from '@lib/frontend/core/containers/ContainerProvider/_ContainerProvider.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { Container } from 'inversify';
import { Provider, type ProviderProps } from 'inversify-react';

export const _ContainerProvider = composeComponent<_ContainerProviderPropsModel, ProviderProps>({
  Component: Provider,

  getProps: ({ children }) => ({
    children,
    container: new Container(),
  }),
});
