import { warn } from '#lib-shared/logging/utils/logger/logger';

const onBeforeRender = (pageContext) => {
  warn(pageContext);

  return {
    pageContext: {},
  };
};

export default onBeforeRender;
