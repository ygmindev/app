import type { AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import type { DevPagePropsModel } from '@lib/frontend/dev/pages/DevPage/DevPage.models';
import { createContext, useContext, useRef } from 'react';

export const AnalyticsContext = createContext({
  category: 'Page',
});

const ButtonInCtx = () => {
  const { category } = useContext(AnalyticsContext);
  return <button type="button">Context: {category}</button>;
};

export const DevPage: FCModel<DevPagePropsModel> = ({ testID }) => {
  const ref = useRef<AnimatableRefModel>(null);
  return (
    <AnalyticsContext.Provider value={{ category: 'Page' }}>
      <AnalyticsContext.Provider value={{ category: 'Header' }}>
        <ButtonInCtx />
      </AnalyticsContext.Provider>

      <AnalyticsContext.Provider value={{ category: 'Body' }}>
        <ButtonInCtx />
      </AnalyticsContext.Provider>

      <ButtonInCtx />

      <AnalyticsContext.Provider value={{ category: 'Footer' }}>
        <ButtonInCtx />
      </AnalyticsContext.Provider>
    </AnalyticsContext.Provider>
  );
};
