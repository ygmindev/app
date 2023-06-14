import { _screen } from '#lib-frontend/test/utils/screen/_screen';
import type { ScreenModel } from '#lib-frontend/test/utils/screen/screen.models';

export const screen = async (): Promise<ScreenModel> => _screen();
