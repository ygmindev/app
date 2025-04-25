import { _useSession } from '@lib/frontend/auth/hooks/useSession/_useSession';
import { type UseSessionModel } from '@lib/frontend/auth/hooks/useSession/useSession.models';

export const useSession = (): UseSessionModel => _useSession();
