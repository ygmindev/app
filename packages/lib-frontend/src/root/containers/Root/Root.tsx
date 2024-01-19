import { type FCModel } from '@lib/frontend/core/core.models';
import { Root as RootBase } from '@lib/frontend/root/containers/Root/Root.base';
import { type RootPropsModel } from '@lib/frontend/root/containers/Root/Root.models';
import { RouteProvider } from '@lib/frontend/route/providers/RouteProvider/RouteProvider';

export const Root: FCModel<RootPropsModel> = ({ additionalProviders, ...props }) => (
  <RootBase
    {...props}
    additionalProviders={[
      ...(additionalProviders ?? []),
      <RouteProvider value={props.context?.route} />,
    ]}
  />
);
