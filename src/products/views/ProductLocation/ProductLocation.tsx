import NotFoundPage from "@saleor/components/NotFoundPage";
import { WindowTitle } from "@saleor/components/WindowTitle";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import useShop from "@saleor/hooks/useShop";
import { commonMessages } from "@saleor/intl";
import {
  findValueInEnum,
  getMutationStatus,
  getStringOrPlaceholder
} from "@saleor/misc";
import ProductLocationDeleteDialog from "@saleor/products/components/ProductLocationDeleteDialog";
import ProductLocationPage from "@saleor/products/components/ProductLocationPage";
import { ProductLocationPageFormData } from "@saleor/products/components/ProductLocationPage/ProductLocationPage";
import {
  useLocationCreateMutation,
  useLocationDeleteMutation,
  useLocationUpdateMutation
} from "@saleor/products/mutations";
import { useLocationDetails } from "@saleor/products/queries";
import {
  productLocationUrl,
  productLocationUrlQueryParams,
  productUrl
} from "@saleor/products/urls";
import { CountryCode } from "@saleor/types/globalTypes";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import React from "react";
import { useIntl } from "react-intl";

export interface ProductLocationPageViewProps {
  productId: string;
  locationId: string;
  params: productLocationUrlQueryParams;
}

const ProductLocation: React.FC<ProductLocationPageViewProps> = ({
  productId,
  locationId,
  params
}) => {
  const intl = useIntl();
  const navigate = useNavigator();
  const notify = useNotifier();
  const shop = useShop();
  const { data, loading } = useLocationDetails({
    displayLoader: true,
    variables: { id: locationId }
  });

  const [updateLocation, updateLocationOpts] = useLocationUpdateMutation({
    onCompleted: data => {
      if (data.locationUpdate.locationErrors.length === 0) {
        notify({
          status: "success",
          text: intl.formatMessage(commonMessages.savedChanges)
        });
      }
    }
  });
  const updateLocationTransitionState = getMutationStatus(updateLocationOpts);

  const [createLocation, createLocationOpts] = useLocationCreateMutation({
    onCompleted: data => {
      if (data.locationCreate.locationErrors.length === 0) {
        notify({
          status: "success",
          text: intl.formatMessage(commonMessages.savedChanges)
        });
      }
    }
  });
  const createLocationTransitionState = getMutationStatus(createLocationOpts);

  const [deleteLocation, deleteLocationOpts] = useLocationDeleteMutation({
    onCompleted: data => {
      if (data.locationDelete.locationErrors.length === 0) {
        notify({
          status: "success",
          text: intl.formatMessage(commonMessages.savedChanges)
        });
        navigate(productUrl(productId));
      }
    }
  });
  const deleteLocationTransitionState = getMutationStatus(deleteLocationOpts);

  const [openModal, closeModal] = createDialogActionHandlers(
    navigate,
    params => productLocationUrl(productId, locationId, params),
    params
  );

  const isNewLocation = locationId === "add";

  if (data?.location === null && !isNewLocation) {
    return <NotFoundPage onBack={() => navigate(productUrl(productId))} />;
  }

  const handleSubmit = async (data: ProductLocationPageFormData) => {
    const variables = {
      address: {
        city: data.city,
        cityArea: data.cityArea,
        country: findValueInEnum(data.country, CountryCode),
        countryArea: data.countryArea,
        phone: data.phone,
        postalCode: data.postalCode,
        streetAddress1: data.streetAddress1,
        streetAddress2: data.streetAddress2
      },
      geography: `POINT(${data.latitude} ${data.longitude})`
    };
    if (isNewLocation) {
      const res = await createLocation({
        variables: {
          input: {
            product: productId,
            ...variables
          }
        }
      });
      return res.data.locationCreate.locationErrors;
    }

    const result = await updateLocation({
      variables: {
        id: locationId,
        input: {
          ...variables
        }
      }
    });
    return result.data.locationUpdate.locationErrors;
  };

  return (
    <>
      <WindowTitle title={data?.location?.id} />
      <ProductLocationPage
        countries={shop?.countries || []}
        disabled={
          loading || updateLocationOpts.loading || createLocationOpts.loading
        }
        errors={
          updateLocationOpts.data?.locationUpdate.locationErrors ||
          createLocationOpts.data?.locationCreate.locationErrors ||
          []
        }
        product={data?.location?.product?.name}
        saveButtonBarState={
          isNewLocation
            ? createLocationTransitionState
            : updateLocationTransitionState
        }
        location={data?.location}
        onBack={() => navigate(productUrl(productId))}
        onDelete={() => openModal("delete")}
        onSubmit={handleSubmit}
      />
      <ProductLocationDeleteDialog
        confirmButtonState={deleteLocationTransitionState}
        name={getStringOrPlaceholder(data?.location?.product.name)}
        onClose={closeModal}
        onConfirm={() =>
          deleteLocation({
            variables: { id: locationId }
          })
        }
        open={params.action === "delete"}
      />
    </>
  );
};

ProductLocation.displayName = "ProductLocation";
export default ProductLocation;
