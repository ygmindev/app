import { internationalizeConfig } from '@lib/config/locale/internationalize/internationalize';
import { Root } from '@lib/frontend/root/containers/Root/Root';
import { Router } from '@lib/frontend/route/containers/Router/Router';
import { _render } from '@lib/frontend/test/utils/render/_render';
import {
  type RenderModel,
  type RenderParamsModel,
} from '@lib/frontend/test/utils/render/render.models';
import { LOCALE } from '@lib/shared/locale/locale.constants';

export const render = async (params: RenderParamsModel): Promise<RenderModel> => {
  const i18n = internationalizeConfig.config();
  return _render({
    ...params,
    Wrapper: ({ children }) => {
      return (
        <Root context={{ [LOCALE]: { i18n, lang: i18n.language } }}>
          <Router routes={[{ element: children ?? undefined, pathname: '/' }]} />
        </Root>
      );
    },
    // Wrapper: ({ children }) => (
    //   <Root context={{ [LOCALE]: { i18n, lang: i18n.language } }}>
    //     <Router routes={[{ element: children ?? undefined, pathname: '/' }]} />
    //   </Root>
    // ),
  });
};
