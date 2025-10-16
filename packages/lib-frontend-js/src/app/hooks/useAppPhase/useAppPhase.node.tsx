import { APP_PHASE } from '@lib/frontend/app/hooks/useAppPhase/useAppPhase.constants';
import { type UseAppPhaseModel } from '@lib/frontend/app/hooks/useAppPhase/useAppPhase.models';

export const useAppPhase = (): UseAppPhaseModel => APP_PHASE.SERVER_SIDE_RENDERING;
