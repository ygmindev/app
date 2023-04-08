import type { StyleBrightnessModel } from '@lib/frontend/style/style.models';

export type UseBrightnessModel = [StyleBrightnessModel, (params: StyleBrightnessModel) => void];
