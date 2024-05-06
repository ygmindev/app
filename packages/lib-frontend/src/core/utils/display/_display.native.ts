import { type _DisplayModel } from '@lib/frontend/core/utils/display/_display.models';
import { type EmitterSubscription } from 'react-native';
import { Dimensions } from 'react-native';

const subscribers: Record<string, EmitterSubscription> = {};

const subscribeEvent = <TType extends Event>(
  eventName: string,
  cb: (event: TType) => void,
): void => {
  subscribers[eventName] = Dimensions.addEventListener('change', cb as never);
};

const unsubscribeEvent = <TType extends Event>(
  eventName: string,
  _cb: (event: TType) => void,
): void => {
  subscribers[eventName] && subscribers[eventName].remove();
};

export const _display: _DisplayModel = {
  getDimension: () => ({
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  }),

  // TODO: implement
  open: (uri, { height, onClose, onOpen, width }) => null,
  subscribeEvent,
  subscribeMessage: (_cb) => null,
  subscribeResize: (cb) => subscribeEvent('change', cb),
  unsubscribeEvent,
  unsubscribeMessage: (_cb) => null,
  unsubscribeResize: (cb) => unsubscribeEvent('change', cb),
};
