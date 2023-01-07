import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { _Active } from '@lib/frontend/route/components/Active/_Active';
import type { _ActivePropsModel } from '@lib/frontend/route/components/Active/_Active.models';
import type { ActivePropsModel } from '@lib/frontend/route/components/Active/Active.models';

export const Active = composeComponent<ActivePropsModel, _ActivePropsModel>({
  getComponent: () => _Active,
});
