import NotFoundPage from "@saleor/components/NotFoundPage";
import { WindowTitle } from "@saleor/components/WindowTitle";
import useNavigator from "@saleor/hooks/useNavigator";
import { useLocationDetails } from "@saleor/products/queries";
import { warehouseListUrl } from "@saleor/warehouses/urls";
import React from "react";
// import { useIntl } from "react-intl";

export interface ProductLocationUpdateProps {
  productId: string;
  locationId: string;
}

const ProductLocationUpdate: React.FC<ProductLocationUpdateProps> = ({
  locationId
}) => {
  // const intl = useIntl();
  const navigate = useNavigator();
  // const notify = useNotifier();
  // const shop = useShop();
  const { data } = useLocationDetails({
    displayLoader: true,
    variables: { id: locationId }
  });
  // const [updateWarehouse, updateWarehouseOpts] = useWarehouseUpdate({
  //   onCompleted: data => {
  //     if (data.updateWarehouse.errors.length === 0) {
  //       notify({
  //         status: "success",
  //         text: intl.formatMessage(commonMessages.savedChanges)
  //       });
  //     }
  //   }
  // });
  // const updateWarehouseTransitionState = getMutationStatus(updateWarehouseOpts);

  // const [deleteWarehouse, deleteWarehouseOpts] = useWarehouseDelete({
  //   onCompleted: data => {
  //     if (data.deleteWarehouse.errors.length === 0) {
  //       notify({
  //         status: "success",
  //         text: intl.formatMessage(commonMessages.savedChanges)
  //       });
  //       navigate(warehouseListUrl());
  //     }
  //   }
  // });
  // const deleteWarehouseTransitionState = getMutationStatus(deleteWarehouseOpts);

  // const [openModal, closeModal] = createDialogActionHandlers(
  //   navigate,
  //   params => warehouseUrl(id, params),
  //   params
  // );

  if (data?.location === null) {
    return <NotFoundPage onBack={() => navigate(warehouseListUrl())} />;
  }

  // const handleSubmit = async (data: WarehouseDetailsPageFormData) => {
  //   const result = await updateWarehouse({
  //     variables: {
  //       id,
  //       input: {
  //         address: {
  //           city: data.city,
  //           cityArea: data.cityArea,
  //           country: findValueInEnum(data.country, CountryCode),
  //           countryArea: data.countryArea,
  //           phone: data.phone,
  //           postalCode: data.postalCode,
  //           streetAddress1: data.streetAddress1,
  //           streetAddress2: data.streetAddress2
  //         },
  //         name: data.name
  //       }
  //     }
  //   });
  //   return result.data.updateWarehouse.errors;
  // };
  return (
    <>
      <WindowTitle title={data?.location?.id} />
      <div>text</div>
      {/* <WarehouseDetailsPage
        countries={shop?.countries || []}
        disabled={loading || updateWarehouseOpts.loading}
        errors={updateWarehouseOpts.data?.updateWarehouse.errors || []}
        saveButtonBarState={updateWarehouseTransitionState}
        warehouse={data?.warehouse}
        onBack={() => navigate(warehouseListUrl())}
        onDelete={() => openModal("delete")}
        onShippingZoneClick={id => navigate(shippingZoneUrl(id))}
        onSubmit={handleSubmit}
      />
      <WarehouseDeleteDialog
        confirmButtonState={deleteWarehouseTransitionState}
        name={getStringOrPlaceholder(data?.warehouse?.name)}
        onClose={closeModal}
        onConfirm={() =>
          deleteWarehouse({
            variables: { id }
          })
        }
        open={params.action === "delete"}
      /> */}
    </>
  );
};

ProductLocationUpdate.displayName = "ProductLocationUpdate";
export default ProductLocationUpdate;
