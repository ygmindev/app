import {
  type _HandleHmrModel,
  type _HandleHmrParamsModel,
} from '@lib/shared/core/utils/handleHmr/_handleHmr.models';

export const _handleHmr = ({ onChange }: _HandleHmrParamsModel): _HandleHmrModel => {
  if (import.meta.hot) {
    import.meta.hot.on('vite:beforeFullReload', () => void onChange());
    import.meta.hot.dispose(() => void onChange());
  }
};
