import { useRef } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type FCModel } from '#lib-frontend/core/core.models';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

const width = 0;

export const DevPage: FCModel<DevPagePropsModel> = () => {
  const ref = useRef<WrapperRefModel>(null);
  return (
    <Wrapper
      grow
      position={SHAPE_POSITION.RELATIVE}
      s>
      <Wrapper
        animation={{
          duration: 1000,
          states: { [ELEMENT_STATE.INACTIVE]: { width: 0 } },
        }}
        backgroundColor="green"
        height={5}
        left={0}
        position="absolute"
        ref={ref}
        right={0}
        top={0}
      />

      <Button
        mTop={50}
        onPress={() => ref?.current?.to({ width: width + 100 })}>
        Click
      </Button>
    </Wrapper>
  );
};
