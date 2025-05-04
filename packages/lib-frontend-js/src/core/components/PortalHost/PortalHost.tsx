import { type PortalHostPropsModel } from '@lib/frontend/core/components/PortalHost/PortalHost.models';
import { type FCModel } from '@lib/frontend/core/core.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';

export const PortalHost: FCModel<PortalHostPropsModel> = ({ children, root = 'root' }) => {
  const [portals] = useStore('app.portals');
  return (
    <>
      {(portals?.[root] ?? []).map(({ node }) => node)}

      {children}
    </>
  );
};
