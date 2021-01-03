/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LocationDetails
// ====================================================

export interface LocationDetails_location_address_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface LocationDetails_location_address {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: LocationDetails_location_address_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface LocationDetails_location {
  __typename: "Location";
  id: string;
  geography: any;
  address: LocationDetails_location_address;
}

export interface LocationDetails {
  location: LocationDetails_location | null;
}

export interface LocationDetailsVariables {
  id: string;
}
