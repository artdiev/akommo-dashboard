/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LocationFragment
// ====================================================

export interface LocationFragment_address_country {
  __typename: "CountryDisplay";
  code: string;
  country: string;
}

export interface LocationFragment_address {
  __typename: "Address";
  city: string;
  cityArea: string;
  companyName: string;
  country: LocationFragment_address_country;
  countryArea: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string | null;
  postalCode: string;
  streetAddress1: string;
  streetAddress2: string;
}

export interface LocationFragment {
  __typename: "Location";
  id: string;
  geography: any;
  address: LocationFragment_address;
}
