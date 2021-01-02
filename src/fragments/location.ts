import gql from "graphql-tag";

import { fragmentAddress } from "./address";

export const fragmentLocation = gql`
  ${fragmentAddress}
  fragment LocationFragment on Location {
    id
    geography
    address {
      ...AddressFragment
    }
  }
`;
