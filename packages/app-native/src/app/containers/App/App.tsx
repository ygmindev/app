import { routes } from '#app-native/routes';
import type { FCModel } from '#lib-frontend/core/core.models';
import { Root } from '#lib-frontend/root/containers/Root/Root';
import { Routes } from '#lib-frontend/route/containers/Routes/Routes';
import { RouteProvider } from '#lib-frontend/route/providers/RouteProvider/RouteProvider';

export const App: FCModel = () => (
  <Root additionalProviders={[<RouteProvider />]}>
    <Routes routes={routes} />
  </Root>
);
