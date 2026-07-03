import { _useClipboard } from '@lib/frontend/core/hooks/useClipboard/_useClipboard';
import { type UseClipboardModel } from '@lib/frontend/core/hooks/useClipboard/useClipboard.models';

export const useClipboard = (): UseClipboardModel => _useClipboard();
