import type { ProviderPropsModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { RootContextModel } from '@lib/frontend/root/root.models';
import type { ContextProviderPropsModel } from '@lib/frontend/root/providers/ContextProvider/ContextProvider.models';
import type { RequiredModel } from '@lib/shared/core/core.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { createContext } from 'react';

export const RootContext = createContext<RootContextModel>({});

export const ContextProvider = composeComponent<
  ContextProviderPropsModel,
  RequiredModel<ProviderPropsModel<RootContextModel>>
>({
  Component: RootContext.Provider,
});

process.env.APP_DEBUG && (ContextProvider.displayName = variableName(() => ContextProvider));