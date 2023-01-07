import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _ActivePropsModel } from '@lib/frontend/route/components/Active/_Active.models';
import type { OutletProps } from 'react-router';
import { Outlet } from 'react-router';

export const _Active = composeComponent<_ActivePropsModel, OutletProps>({
  getComponent: () => Outlet,
});
