import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { HttpImplementation } from '@lib/backend/http/utils/HttpImplementation/HttpImplementation';
import {
  type CreateDeliveryInputModel,
  type CreateDeliveryResultModel,
  type DeliveryImplementationModel,
} from '@lib/shared/aroom/resources/Delivery/DeliveryImplementation/DeliveryImplementation.models';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';

@withContainer()
export class DeliveryImplementation implements DeliveryImplementationModel {
  @withInject(HttpImplementation) protected httpImplementation!: HttpImplementation;

  async createDelivery(input: CreateDeliveryInputModel): Promise<CreateDeliveryResultModel> {
    console.warn(input);
    return { success: true };
  }
}
