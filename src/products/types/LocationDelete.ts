/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LocationErrorCode } from "./../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: LocationDelete
// ====================================================

export interface LocationDelete_locationDelete_locationErrors {
  __typename: "LocationError";
  code: LocationErrorCode;
  field: string | null;
}

export interface LocationDelete_locationDelete {
  __typename: "LocationDelete";
  locationErrors: LocationDelete_locationDelete_locationErrors[];
}

export interface LocationDelete {
  locationDelete: LocationDelete_locationDelete | null;
}

export interface LocationDeleteVariables {
  id: string;
}
