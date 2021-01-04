import AppHeader from "@saleor/components/AppHeader";
import CardSpacer from "@saleor/components/CardSpacer";
import CompanyAddressInput from "@saleor/components/CompanyAddressInput";
import { ConfirmButtonTransitionState } from "@saleor/components/ConfirmButton";
import Container from "@saleor/components/Container";
import Form from "@saleor/components/Form";
import Grid from "@saleor/components/Grid";
import PageHeader from "@saleor/components/PageHeader";
import SaveButtonBar from "@saleor/components/SaveButtonBar";
import { ShopInfo_shop_countries } from "@saleor/components/Shop/types/ShopInfo";
import { AddressTypeInput } from "@saleor/customers/types";
import { LocationErrorFragment } from "@saleor/fragments/types/LocationErrorFragment";
import useAddressValidation from "@saleor/hooks/useAddressValidation";
import { SubmitPromise } from "@saleor/hooks/useForm";
import useStateFromProps from "@saleor/hooks/useStateFromProps";
import { findValueInEnum, maybe } from "@saleor/misc";
import { ProductDetails_product_location } from "@saleor/products/types/ProductDetails";
import { CountryCode } from "@saleor/types/globalTypes";
import createSingleAutocompleteSelectHandler from "@saleor/utils/handlers/singleAutocompleteSelectChangeHandler";
import { mapCountriesToChoices } from "@saleor/utils/maps";
import React from "react";
import { useIntl } from "react-intl";

import ProductLocationMap from "../ProductLocationMap";

export interface ProductLocationPageFormData extends AddressTypeInput {
  longitude: number;
  latitude: number;
}
export interface ProductLocationPageProps {
  countries: ShopInfo_shop_countries[];
  disabled: boolean;
  errors: LocationErrorFragment[];
  saveButtonBarState: ConfirmButtonTransitionState;
  location: ProductDetails_product_location;
  product: string;
  onBack: () => void;
  onDelete: () => void;
  onSubmit: (data: ProductLocationPageFormData) => SubmitPromise;
}

const ProductLocationPage: React.FC<ProductLocationPageProps> = ({
  countries,
  disabled,
  errors,
  product,
  saveButtonBarState,
  location,
  onBack,
  onDelete,
  onSubmit
}) => {
  const intl = useIntl();
  const [displayCountry, setDisplayCountry] = useStateFromProps(
    location?.address?.country.country || ""
  );

  const {
    errors: validationErrors,
    submit: handleSubmit
  } = useAddressValidation(onSubmit);

  const initialForm: ProductLocationPageFormData = {
    city: maybe(() => location.address.city, ""),
    companyName: maybe(() => location.address.companyName, ""),
    country: maybe(() =>
      findValueInEnum(location.address.country.code, CountryCode)
    ),
    countryArea: maybe(() => location.address.countryArea, ""),
    latitude: maybe(() => location.geography.coordinates[0], 43.55),
    longitude: maybe(() => location.geography.coordinates[1], 7),
    phone: maybe(() => location.address.phone, ""),
    postalCode: maybe(() => location.address.postalCode, ""),
    streetAddress1: maybe(() => location.address.streetAddress1, ""),
    streetAddress2: maybe(() => location.address.streetAddress2, "")
  };

  return (
    <Form initial={initialForm} onSubmit={handleSubmit}>
      {({ change, data, hasChanged, submit }) => {
        const countryChoices = mapCountriesToChoices(countries);
        const handleCountryChange = createSingleAutocompleteSelectHandler(
          change,
          setDisplayCountry,
          countryChoices
        );

        return (
          <Container>
            <AppHeader onBack={onBack}>{product}</AppHeader>
            <PageHeader title="Edit Location" />
            <Grid>
              <div>
                <CompanyAddressInput
                  countries={countryChoices}
                  data={data}
                  disabled={disabled}
                  displayCountry={displayCountry}
                  errors={[...errors, ...validationErrors]}
                  header={intl.formatMessage({
                    defaultMessage: "Address Information",
                    description: "warehouse"
                  })}
                  onChange={change}
                  onCountryChange={handleCountryChange}
                />
                <CardSpacer />
                <ProductLocationMap
                  data={data}
                  disabled={disabled}
                  errors={errors}
                  onChange={change}
                />
              </div>
            </Grid>
            <SaveButtonBar
              disabled={disabled || !hasChanged}
              onCancel={onBack}
              onDelete={onDelete}
              onSave={submit}
              state={saveButtonBarState}
            />
          </Container>
        );
      }}
    </Form>
  );
};

ProductLocationPage.displayName = "ProductLocationPage";
export default ProductLocationPage;
