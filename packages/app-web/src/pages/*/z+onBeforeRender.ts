import { _config } from '#lib-config/locale/internationalize/internationalize.node';

const onBeforeRender = async () => {
  const i18n = _config();
  return { pageContext: {} };
};

export default onBeforeRender;
