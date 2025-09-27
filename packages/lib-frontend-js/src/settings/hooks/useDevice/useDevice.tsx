import { _useDevice } from '@lib/frontend/settings/hooks/useDevice/_useDevice';
import { type UseDeviceModel } from '@lib/frontend/settings/hooks/useDevice/useDevice.models';

export const useDevice = (): UseDeviceModel => _useDevice();
