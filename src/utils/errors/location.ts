import { LocationErrorFragment } from "@saleor/fragments/types/LocationErrorFragment";
import { commonMessages } from "@saleor/intl";
import { LocationErrorCode } from "@saleor/types/globalTypes";
import { defineMessages, IntlShape } from "react-intl";

import commonErrorMessages from "./common";


const messages = defineMessages({
  slugUnique: {
    defaultMessage: "Product must be unique for each location",
    description: "error message"
  }
});

function getLocationErrorMessage(
  err: Omit<LocationErrorFragment, "__typename"> | undefined,
  intl: IntlShape
): string {
  if (err) {
    switch (err.code) {
      case LocationErrorCode.GRAPHQL_ERROR:
        return intl.formatMessage(commonErrorMessages.graphqlError);
      case LocationErrorCode.REQUIRED:
        return intl.formatMessage(commonMessages.requiredField);
      case LocationErrorCode.INVALID:
        return intl.formatMessage(commonErrorMessages.invalid);
      default:
        return intl.formatMessage(commonErrorMessages.unknownError);
    }
  }

  return undefined;
}

export function getLocationSlugErrorMessage(
  err: Omit<LocationErrorFragment, "__typename"> | undefined,
  intl: IntlShape
): string {
  if (err) {
    switch (err.code) {
      case LocationErrorCode.UNIQUE:
        return intl.formatMessage(messages.slugUnique);
      default:
        return getLocationErrorMessage(err, intl);
    }
  }

  return undefined;
}

export default getLocationErrorMessage;
