import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';

export const WITH_CONTAINER_PROPERTY = 'WITH_CONTAINER_PROPERTY';

@withContainer()
export class WithContainerFixture {
  property;
  constructor() {
    this.property = WITH_CONTAINER_PROPERTY;
  }
}

@withContainer()
export class WithContainerChildFixture {
  @withInject(WithContainerFixture) protected _parent!: WithContainerFixture;

  get parent(): WithContainerFixture {
    return this._parent;
  }
}

export class WithoutContainerFixture {}
