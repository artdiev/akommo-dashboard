/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LocationCreateInput, LocationErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: locationCreate
// ====================================================

export interface locationCreate_locationCreate_locationErrors {
  __typename: "LocationError";
  code: LocationErrorCode;
  field: string | null;
}

export interface locationCreate_locationCreate_location_address_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface locationCreate_locationCreate_location_address {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: locationCreate_locationCreate_location_address_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface locationCreate_locationCreate_location {
  __typename: "Location";
  id: string;
  geography: any;
  address: locationCreate_locationCreate_location_address;
}

export interface locationCreate_locationCreate {
  __typename: "LocationCreate";
  locationErrors: locationCreate_locationCreate_locationErrors[];
  location: locationCreate_locationCreate_location | null;
}

export interface locationCreate {
  locationCreate: locationCreate_locationCreate | null;
}

export interface locationCreateVariables {
  input: LocationCreateInput;
}
