import { _useOAuth } from '@lib/frontend/auth/hooks/useOAuth/_useOAuth';
import { type UseOAuthModel } from '@lib/frontend/auth/hooks/useOAuth/useOAuth.models';

export const useOAuth = (): UseOAuthModel => _useOAuth();
