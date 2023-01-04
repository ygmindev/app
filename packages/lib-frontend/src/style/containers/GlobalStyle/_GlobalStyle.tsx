import { sheetConfig } from '@lib/config/style/sheet/sheet.config';
import type { FCModel } from '@lib/frontend/core/core.models';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import type { _GlobalStylePropsModel } from '@lib/frontend/style/containers/GlobalStyle/_GlobalStyle.models';
import { useRef } from 'react';
import { setStylesTarget } from 'typestyle';

export const _GlobalStyle: FCModel<_GlobalStylePropsModel> = () => {
  const ref = useRef<HTMLStyleElement>(null);

  useMount({ onMount: () => ref.current && setStylesTarget(ref.current) });

  return (
    <style
      dangerouslySetInnerHTML={{ __html: sheetConfig }}
      id="typestyle"
      ref={ref}
    />
  );
};
