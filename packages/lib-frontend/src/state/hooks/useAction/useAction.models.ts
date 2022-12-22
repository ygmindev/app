import type { RootActionsModel } from '@lib/frontend/root/stores/rootStore.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export type UseActionModel = CallableModel<RootActionsModel | undefined>;
