import { type LFCModel } from '@lib/frontend/core/core.models';
import { type DevProviderPropsModel } from '@lib/frontend/dev/providers/DevProvider/DevProvider.models';

export const DevProvider: LFCModel<DevProviderPropsModel> = ({ children, ...props }) => {
  return <>{children}</>;
};
