import { portalContext } from '@lib/frontend/app/containers/AppProvider/AppProvider';
import { type PortalHostPropsModel } from '@lib/frontend/core/components/PortalHost/PortalHost.models';
import { type FCModel } from '@lib/frontend/core/core.models';
import { useContext } from 'react';

export const PortalHost: FCModel<PortalHostPropsModel> = ({ children, root = 'root' }) => {
  const { portals } = useContext(portalContext);
  return (
    <>
      {(portals?.[root] ?? []).map(({ node }) => node)}

      {children}
    </>
  );
};
