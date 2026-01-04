import { type ProviderPropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ContextProviderPropsModel } from '@lib/frontend/root/containers/ContextProvider/ContextProvider.models';
import { type RootContextModel } from '@lib/frontend/root/root.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { createContext } from 'react';

export const RootContext = createContext<RootContextModel>({});

export const ContextProvider = composeComponent<
  ContextProviderPropsModel,
  Required<ProviderPropsModel<RootContextModel>>
>({
  Component: RootContext,
});

process.env.APP_IS_DEBUG && (ContextProvider.displayName = variableName({ ContextProvider }));
