import { _ContainerProvider } from '@lib/frontend/core/containers/ContainerProvider/_ContainerProvider';
import { type _ContainerProviderPropsModel } from '@lib/frontend/core/containers/ContainerProvider/_ContainerProvider.models';
import { type ContainerProviderPropsModel } from '@lib/frontend/core/containers/ContainerProvider/ContainerProvider.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const ContainerProvider = composeComponent<
  ContainerProviderPropsModel,
  _ContainerProviderPropsModel
>({
  Component: _ContainerProvider,
});

process.env.APP_IS_DEBUG && (ContainerProvider.displayName = variableName({ ContainerProvider }));
