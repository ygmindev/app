import { type LFCModel } from '@lib/frontend/core/core.models';
import { useRootContext } from '@lib/frontend/root/hooks/useRootContext/useRootContext';
import { _Router } from '@lib/frontend/route/containers/Router/_Router';
import { type RouterPropsModel } from '@lib/frontend/route/containers/Router/Router.models';
import { ROUTE } from '@lib/shared/route/route.constants';

export const Router: LFCModel<RouterPropsModel> = ({ ...props }) => {
  const context = useRootContext();
  return (
    <_Router
      {...props}
      value={context?.[ROUTE]}
    />
  );
};
