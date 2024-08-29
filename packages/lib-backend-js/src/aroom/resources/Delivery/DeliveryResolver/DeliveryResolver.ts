import { Delivery, DeliveryResult } from '@lib/backend/aroom/resources/Delivery/Delivery';
import { DeliveryImplementation } from '@lib/backend/aroom/resources/Delivery/DeliveryImplementation/DeliveryImplementation';
import { type DeliveryResolverModel } from '@lib/backend/aroom/resources/Delivery/DeliveryResolver/DeliveryResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withParams } from '@lib/backend/resource/utils/withParams/withParams';
import { withResult } from '@lib/backend/resource/utils/withResult/withResult';
import { DELIVERY_RESOURCE } from '@lib/shared/aroom/resources/Delivery/Delivery.constants';
import {
  type CreateDeliveryInputModel,
  type CreateDeliveryResultModel,
} from '@lib/shared/aroom/resources/Delivery/DeliveryImplementation/DeliveryImplementation.models';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';

@withEntity({ name: 'CreateDelivery' })
export class CreateDeliveryInput extends Delivery implements CreateDeliveryInputModel {}

@withContainer()
@withResolver()
export class DeliveryResolver implements DeliveryResolverModel {
  @withInject(DeliveryImplementation) protected deliveryImplementation!: DeliveryImplementation;

  @withResult({
    Resource: () => DeliveryResult,
    name: `${RESOURCE_METHOD_TYPE.CREATE}${DELIVERY_RESOURCE}`,
    operation: GRAPHQL_OPERATION_TYPE.MUTATION,
  })
  async createDelivery(
    @withParams({ Resource: () => CreateDeliveryInput })
    input: CreateDeliveryInputModel,
  ): Promise<CreateDeliveryResultModel> {
    return this.deliveryImplementation.createDelivery(input);
  }
}
