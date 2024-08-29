export type CoordinateModel = {
  latitude?: number;
  longitude?: number;
};

export type AddressModel = CoordinateModel & {
  address1?: string;
  address2?: string;
  city?: string;
  country?: string;
  countryCode?: string;
  name?: string;
  postalCode?: string;
  province?: string;
};
