import { Button } from '#lib-frontend/core/components/Button/Button';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '#lib-frontend/core/core.models';
import type { DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';

export const DevPage: FCModel<DevPagePropsModel> = ({ testID }) => {
  return (
    <Wrapper spacing>
      <Wrapper
        backgroundColor="red"
        height={100}
        onPress={() => console.warn('press')}
        width={100}
      />

      <Button>hi</Button>
    </Wrapper>
  );
};
