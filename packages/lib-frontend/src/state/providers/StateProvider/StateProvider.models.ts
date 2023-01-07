import type { ProviderPropsModel } from '@lib/frontend/core/core.models';
import type { RootStateModel } from '@lib/frontend/root/stores/rootStore.models';
import type { PartialDeepModel } from '@lib/shared/core/core.models';

export interface StateProviderPropsModel
  extends ProviderPropsModel<PartialDeepModel<RootStateModel>> {}
