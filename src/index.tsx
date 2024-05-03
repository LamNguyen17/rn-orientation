import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'rn-orientation' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: '- You have run \'pod install\'\n', default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const RnOrientation = NativeModules.RnOrientation
  ? NativeModules.RnOrientation
  : new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    },
  );

export function multiply(a: number, b: number): Promise<number> {
  return RnOrientation.multiply(a, b);
}

export default class Orientation {
  static getOrientation = (cb: any) => {
    return RnOrientation.getOrientation((orientation: string)=> {
      cb(orientation);
    });
  };

  static getInitialOrientation = () => {
    const { initialOrientation } = RnOrientation.getConstants();
    return initialOrientation;
  };
}
