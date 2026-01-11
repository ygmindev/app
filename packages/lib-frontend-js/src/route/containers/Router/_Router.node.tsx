import { type FCModel } from '@lib/frontend/core/core.models';
import { _Router as _RouterBase } from '@lib/frontend/route/containers/Router/_Router.base';
import { type _RouterPropsModel } from '@lib/frontend/route/containers/Router/_Router.models';
import { ServerContainer } from '@react-navigation/native';

export const _Router: FCModel<_RouterPropsModel> = ({ routes, value }) => (
  <ServerContainer location={{ pathname: value?.location?.pathname ?? '/', search: '' }}>
    <_RouterBase
      routes={routes}
      value={value}
    />
  </ServerContainer>
);
