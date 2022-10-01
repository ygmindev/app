import { App } from '@app/web/app/containers/App/App';
import type { ComponentType } from 'react';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('App', () => App as unknown as ComponentType);

AppRegistry.runApplication('App', { initialProps: {}, rootTag: document.getElementById('root') });
