import { PortalContext } from '@lib/frontend/app/containers/AppProvider/AppProvider';
import { PORTAL_ACTION_TYPE } from '@lib/frontend/app/containers/AppProvider/AppProvider.constants';
import { type PortalPropsModel } from '@lib/frontend/core/components/Portal/Portal.models';
import { type FCModel } from '@lib/frontend/core/core.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { useContext, useEffect, useMemo } from 'react';

export const Portal: FCModel<PortalPropsModel> = ({ children, root = 'root' }) => {
  const { dispatch } = useContext(PortalContext);
  const name = useMemo(() => uid(), []);

  useEffect(() => {
    return () =>
      dispatch({
        payload: { name, root },
        type: PORTAL_ACTION_TYPE.REMOVE_PORTAL,
      });
  }, []);

  useEffect(() => {
    dispatch({
      payload: { name, node: children, root },
      type: PORTAL_ACTION_TYPE.UPSERT_PORTAL,
    });
  }, [children]);

  return null;
};
