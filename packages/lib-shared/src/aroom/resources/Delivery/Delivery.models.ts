export type AroomUserModel = {
  companyName: string;
  email: string;
  name: string;
  phoneNumber: number;
};

export type AroomOrderModel = {
  dropoff: string;
  orderNumber: number;
  orderReceiptAttach?: string;
  pickup: string;
};

export type AroomOrderContactModel = {
  stopAddress: string;
  stopName: string;
  stopPhoneNumber: string;
};

export type DeliveryModel = {
  Creator: AroomUserModel;
  finalDropoff: string;
  firstPickup: string;
  orderContact?: Array<AroomOrderContactModel>;
  orderInformation: Array<AroomOrderModel>;
  pickupDate: Date;
  submitDate: Date;
  totalVolume: string;
  totalWeight: number;
  tripPricing: number;
  vehicleType: string;
  waypoint?: Array<string>;
};
