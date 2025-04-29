import { type _ContainerProviderPropsModel } from '@lib/frontend/core/containers/ContainerProvider/_ContainerProvider.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { type ProviderProps } from 'inversify-react';
import { Provider } from 'inversify-react';

export const _ContainerProvider = composeComponent<_ContainerProviderPropsModel, ProviderProps>({
  Component: Provider,

  getProps: ({ children }) => ({
    children,
    container: Container.container,
  }),
});
