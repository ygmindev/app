import {
  type _InternationalizeConfigModel,
  type InternationalizeConfigModel,
} from '@lib/config/locale/internationalize/internationalize.models';
import { importConfig } from '@lib/config/utils/importConfig/importConfig';
import { Root } from '@lib/frontend/root/containers/Root/Root';
import { Router } from '@lib/frontend/route/containers/Router/Router';
import { _render } from '@lib/frontend/test/utils/render/_render';
import {
  type RenderModel,
  type RenderParamsModel,
} from '@lib/frontend/test/utils/render/render.models';
import { LOCALE } from '@lib/shared/locale/locale.constants';

export const render = async (params: RenderParamsModel): Promise<RenderModel> => {
  const { _config } = await importConfig<InternationalizeConfigModel, _InternationalizeConfigModel>(
    'locale/internationalize/internationalize',
  );
  return _render({
    ...params,
    Wrapper: (props) => (
      <Root context={_config ? { [LOCALE]: { i18n: _config, lang: _config.language } } : {}}>
        <Router routes={[{ element: props.children, pathname: '/' }]} />
      </Root>
    ),
  });
};
