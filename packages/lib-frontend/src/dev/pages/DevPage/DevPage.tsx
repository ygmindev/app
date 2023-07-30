import { motify } from 'moti';
import { type ComponentType, useEffect, useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { animatable } from '#lib-frontend/animation/utils/animatable/animatable';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type ElementStateModel, type FCModel } from '#lib-frontend/core/core.models';
import { toComponentClass } from '#lib-frontend/core/utils/toComponentClass/toComponentClass';
import { type ToComponentClassParamsModel } from '#lib-frontend/core/utils/toComponentClass/toComponentClass.models';
import { type DevPagePropsModel } from '#lib-frontend/dev/pages/DevPage/DevPage.models';

const AnimatableIcon = animatable({
  Component: toComponentClass(
    Icon as unknown as ToComponentClassParamsModel<any>,
  ) as ComponentType<any>,
});

const AnimatableIcon2 = motify(Icon)();

const AnimatableImage = animatable({ Component: Image });

export const DevPage: FCModel<DevPagePropsModel> = () => {
  const [x, setX] = useState<ElementStateModel>('inactive');
  useEffect(() => {
    setTimeout(() => {
      setX('active');
    }, 1000);
  }, []);
  console.warn(x);
  return (
    <Wrapper
      p
      s>
      <AnimatableIcon2
        animate={
          x === 'active'
            ? { backgroundColor: 'red', height: 50, width: 50 }
            : { backgroundColor: 'green', height: 100, width: 100 }
        }
        name="music"
        transition={{ duration: 3000 }}
      />

      <AnimatableIcon
        animation={{
          states: {
            active: { color: 'red', height: 50, width: 50 },
            inactive: { color: 'green', height: 100, width: 100 },
          },
        }}
        elementState={x}
        name="music"
      />

      <AnimatableImage
        animation={{
          duration: 3000,
          states: {
            active: { backgroundColor: 'red', height: 50, width: 50 },
            inactive: { backgroundColor: 'green', height: 100, width: 100 },
          },
        }}
        elementState={x}
        source={{ uri: '/images/logos/logo.png' }}
      />
    </Wrapper>
  );
};
