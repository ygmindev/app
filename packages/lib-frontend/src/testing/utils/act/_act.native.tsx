import type { CallableModel } from '@lib/shared/core/core.models';
import { act } from '@testing-library/react-native';

export const _act = async (callback: CallableModel): Promise<void> => act(callback);
