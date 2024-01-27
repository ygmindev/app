export type AroomUserModel = {
  companyName: string;
  email: string;
  name: string;
  phoneNumber: number;
};

export type AroomOrderModel = {
  additionalNote?: string;
  dropoff: string;
  // dropoffContactPostionNumber: number;
  // dropoffName: string;
  dropoffPhoneNumber: string;
  orderNumber: number;
  // orderPositionNumber: number;
  // orderReceiptAttach: unknown;
  pickup: string;
  // pickupContactPositionNumber: number;
  // pickupName: string;
  pickupPhoneNumber: string;
  // submitDate: Date;
};

export type DeliveryModel = {
  Creator: AroomUserModel;
  finalDropoff: string;
  firstPickup: string;
  orderInformation: Array<AroomOrderModel>;
  pickupDate: Date;
  submitDate: Date;
  totalVolume: string;
  totalWeight: number;
  tripPricing: number;
  vehicleType: string;
  waypoint?: Array<string>;
};
