import type { OAuthRedirectPropsModel } from '@lib/frontend/auth/containers/OAuthRedirect/OAuthRedirect.models';
import { POPUP_EVENT } from '@lib/frontend/core/components/Popup/Popup.constants';
import type { FCModel } from '@lib/frontend/core/core.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { appUri } from '@lib/shared/http/utils/appUri/appUri';
import { useEffect } from 'react';

// TODO: native?
export const OAuthRedirect: FCModel<OAuthRedirectPropsModel> = () => {
  const { location } = useRouter();

  useEffect(() => {
    const params = location && location.params;
    const parent = window.opener;
    if (parent) {
      parent.postMessage({ name: POPUP_EVENT, params }, appUri({ name: 'WEB' }));
      window.close();
    }
  }, [location]);

  return <></>;
};
