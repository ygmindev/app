import { useState } from 'react';

import { type CarouselPropsModel } from '#lib-frontend/animation/components/Carousel/Carousel.models';
import { Slides } from '#lib-frontend/animation/components/Slides/Slides';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const Carousel: SFCModel<CarouselPropsModel> = ({
  current,
  height,
  slides,
  testID,
  width,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const [currentF, currentSet] = useState<number>(current ?? 0);
  const isFirst = currentF <= 0;
  const isLast = currentF >= (slides?.length ?? 0) - 1;
  return (
    <Wrapper
      border
      grow
      height={height}
      isFullWidth={!width}
      isRowAlign
      style={styles}
      testID={testID}
      width={width}>
      <Button
        elementState={isFirst ? ELEMENT_STATE.DISABLED : undefined}
        icon="chevronLeft"
        onPress={() => !isFirst && currentSet(currentF - 1)}
      />

      <Wrapper
        grow
        height={height}>
        <Slides
          current={currentF}
          slides={slides}
        />
      </Wrapper>

      <Button
        elementState={isLast ? ELEMENT_STATE.DISABLED : undefined}
        icon="chevronRight"
        onPress={() => !isLast && currentSet(currentF + 1)}
      />
    </Wrapper>
  );
};
