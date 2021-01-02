/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LocationErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: locationDelete
// ====================================================

export interface locationDelete_locationDelete_locationErrors {
  __typename: "LocationError";
  code: LocationErrorCode;
  field: string | null;
}

export interface locationDelete_locationDelete {
  __typename: "LocationDelete";
  locationErrors: locationDelete_locationDelete_locationErrors[];
}

export interface locationDelete {
  locationDelete: locationDelete_locationDelete | null;
}

export interface locationDeleteVariables {
  id: string;
}
