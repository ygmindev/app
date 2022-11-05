import type { _UseCurrentRouteModel } from '@lib/frontend/routing/containers/AnimatedRoute/_useCurrentRoute.models';
import { useOutlet } from 'react-router';

export const _useCurrentRoute: _UseCurrentRouteModel = () => useOutlet();
