/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LocationUpdateInput, LocationErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: LocationUpdate
// ====================================================

export interface LocationUpdate_locationUpdate_locationErrors {
  __typename: "LocationError";
  code: LocationErrorCode;
  field: string | null;
}

export interface LocationUpdate_locationUpdate_location_address_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface LocationUpdate_locationUpdate_location_address {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: LocationUpdate_locationUpdate_location_address_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface LocationUpdate_locationUpdate_location {
  __typename: "Location";
  id: string;
  geography: any;
  address: LocationUpdate_locationUpdate_location_address;
}

export interface LocationUpdate_locationUpdate {
  __typename: "LocationUpdate";
  locationErrors: LocationUpdate_locationUpdate_locationErrors[];
  location: LocationUpdate_locationUpdate_location | null;
}

export interface LocationUpdate {
  locationUpdate: LocationUpdate_locationUpdate | null;
}

export interface LocationUpdateVariables {
  id: string;
  input: LocationUpdateInput;
}
