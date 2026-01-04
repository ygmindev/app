import { type AppModel, type AppParamsModel } from '@lib/backend/app/utils/App/App.models';
import { Bootstrappable } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable';

export class App extends Bootstrappable implements AppModel {
  name: string;

  constructor({ name }: AppParamsModel) {
    super();
    this.name = name;
  }
}
