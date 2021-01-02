/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LocationUpdateInput, LocationErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: locationUpdate
// ====================================================

export interface locationUpdate_locationUpdate_locationErrors {
  __typename: "LocationError";
  code: LocationErrorCode;
  field: string | null;
}

export interface locationUpdate_locationUpdate_location_address_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface locationUpdate_locationUpdate_location_address {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: locationUpdate_locationUpdate_location_address_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface locationUpdate_locationUpdate_location {
  __typename: "Location";
  id: string;
  geography: any;
  address: locationUpdate_locationUpdate_location_address;
}

export interface locationUpdate_locationUpdate {
  __typename: "LocationUpdate";
  locationErrors: locationUpdate_locationUpdate_locationErrors[];
  location: locationUpdate_locationUpdate_location | null;
}

export interface locationUpdate {
  locationUpdate: locationUpdate_locationUpdate | null;
}

export interface locationUpdateVariables {
  id: string;
  input: LocationUpdateInput;
}
