import { type FCModel } from '@lib/frontend/core/core.models';
import { motion } from 'framer-motion';
import { MotiView } from 'moti';
import { useState } from 'react';
import { View } from 'react-native';

const MotionView = motion(View);

export const Page: FCModel = () => {
  const [isActive, isActiveSet] = useState(false);

  const element = <div style={{ backgroundColor: 'blue', height: 100, width: 100 }} />;

  const trigger = () => {
    isActiveSet(!isActive);
  };

  return (
    <div>
      <button onClick={trigger}>trigger</button>

      <MotionView
        animate={isActive ? { opacity: 1.0, scale: 1.0 } : undefined}
        initial={{ opacity: 0.5, scale: 0.5 }}>
        {element}
      </MotionView>

      <MotiView
        animate={isActive ? { opacity: 1.0, scale: 1.0 } : undefined}
        from={{ opacity: 0.5, scale: 0.5 }}
        transition={{ duration: 500, type: 'timing' }}>
        {element}
      </MotiView>
    </div>
  );
};

// import { type FCModel } from '@lib/frontend/core/core.models';
// import { Router } from '@lib/frontend/route/containers/Router/Router';

// import { routes } from '../config/routes';

// export const Page: FCModel = () => <Router routes={routes} />;
