import RNW from 'react-native-web';

module.exports = RNW.default ?? RNW;

export const requireNativeComponent = () => null;

export const ViewPropTypes = { style: () => null };
