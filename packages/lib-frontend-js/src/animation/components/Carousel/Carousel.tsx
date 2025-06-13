import { type CarouselPropsModel } from '@lib/frontend/animation/components/Carousel/Carousel.models';
import { Slides } from '@lib/frontend/animation/components/Slides/Slides';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type SFCModel } from '@lib/frontend/core/core.models';
import { useState } from 'react';

export const Carousel: SFCModel<CarouselPropsModel> = ({ current, slides, ...props }) => {
  const [currentF, currentSet] = useState<number>(current ?? 0);
  const isFirst = currentF <= 0;
  const isLast = currentF >= (slides?.length ?? 0) - 1;
  return (
    <Wrapper
      {...props}
      flex
      isAlign
      isFullWidth
      isRow>
      <Button
        elementState={isFirst ? ELEMENT_STATE.DISABLED : undefined}
        icon="chevronLeft"
        onPress={() => !isFirst && currentSet(currentF - 1)}
      />

      <Wrapper
        flex
        isFullHeight>
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
