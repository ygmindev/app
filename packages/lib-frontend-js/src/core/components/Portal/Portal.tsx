import { type PortalPropsModel } from '@lib/frontend/core/components/Portal/Portal.models';
import { type FCModel } from '@lib/frontend/core/core.models';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { remove } from '@lib/shared/core/utils/remove/remove';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { useEffect, useMemo } from 'react';

export const Portal: FCModel<PortalPropsModel> = ({ children, root = 'root' }) => {
  const [portals, portalsSet] = useStore('app.portals');
  const name = useMemo(() => uid(), []);

  useEffect(() => {
    portalsSet({
      ...portals,
      [root]: [...(portals?.[root] ?? []), { name, node: children }],
    });
    return () =>
      portalsSet({
        ...portals,
        [root]: remove(portals?.[root] ?? [], (v) => v.name === name),
      });
  }, []);

  return null;
};
