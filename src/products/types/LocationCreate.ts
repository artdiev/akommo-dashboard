/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LocationCreateInput, LocationErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: LocationCreate
// ====================================================

export interface LocationCreate_locationCreate_locationErrors {
  __typename: "LocationError";
  code: LocationErrorCode;
  field: string | null;
}

export interface LocationCreate_locationCreate_location_address_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface LocationCreate_locationCreate_location_address {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: LocationCreate_locationCreate_location_address_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface LocationCreate_locationCreate_location_product {
  __typename: "Product";
  id: string;
  name: string;
}

export interface LocationCreate_locationCreate_location {
  __typename: "Location";
  id: string;
  geography: any;
  address: LocationCreate_locationCreate_location_address;
  product: LocationCreate_locationCreate_location_product;
}

export interface LocationCreate_locationCreate {
  __typename: "LocationCreate";
  locationErrors: LocationCreate_locationCreate_locationErrors[];
  location: LocationCreate_locationCreate_location | null;
}

export interface LocationCreate {
  locationCreate: LocationCreate_locationCreate | null;
}

export interface LocationCreateVariables {
  input: LocationCreateInput;
}
