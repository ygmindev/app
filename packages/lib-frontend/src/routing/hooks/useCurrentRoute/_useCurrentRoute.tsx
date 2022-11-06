import type { _UseCurrentRouteModel } from '@lib/frontend/routing/hooks/useCurrentRoute/_useCurrentRoute.models';
import { useOutlet } from 'react-router';

export const _useCurrentRoute: _UseCurrentRouteModel = () => useOutlet();
