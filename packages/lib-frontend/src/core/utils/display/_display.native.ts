import type { _DisplayModel } from '@lib/frontend/core/utils/display/_display.models';
import { useLayoutEffect } from 'react';
import type { EmitterSubscription } from 'react-native';
import { Dimensions } from 'react-native';

let subscriber: EmitterSubscription;

export const _display: _DisplayModel = {
  getDimension: () => ({
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  }),

  open: (uri, { height, onClose, onOpen, width }) => null,

  // TODO: implement
  subscribeMessage: (_cb) => null,

  subscribeResize: (cb) => {
    subscriber = Dimensions.addEventListener('change', cb);
  },

  unsubscribeMessage: (_cb) => null,
  unsubscribeResize: (_cb) => subscriber && subscriber.remove(),
  useLayoutEffect,
};
