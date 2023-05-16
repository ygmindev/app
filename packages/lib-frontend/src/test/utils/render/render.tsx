import internationalizeConfig from '@lib/config/locale/internationalize/configs/internationalize.config';
import { Root } from '@lib/frontend/root/containers/Root/Root';
import { Router } from '@lib/frontend/route/containers/Router/Router';
import { _render } from '@lib/frontend/test/utils/render/_render';
import type { RenderModel, RenderParamsModel } from '@lib/frontend/test/utils/render/render.models';
import { LOCALE } from '@lib/shared/locale/locale.constants';

export const render = (params: RenderParamsModel): RenderModel =>
  _render({
    ...params,
    Wrapper: (props) => (
      <Root context={{ [LOCALE]: { i18n: internationalizeConfig, lang: 'en-US' } }}>
        <Router routes={[{ element: props.children, pathname: '/' }]} />
      </Root>
    ),
  });
