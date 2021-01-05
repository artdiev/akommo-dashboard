import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { PinDrop } from "@material-ui/icons";
import CardTitle from "@saleor/components/CardTitle";
import FormSpacer from "@saleor/components/FormSpacer";
import { Grid } from "@saleor/components/Grid";
import { LocationErrorFragment } from "@saleor/fragments/types/LocationErrorFragment";
import { ChangeEvent, FormChange } from "@saleor/hooks/useForm";
import { commonMessages } from "@saleor/intl";
import { getFormErrors } from "@saleor/utils/errors";
import getLocationErrorMessage from "@saleor/utils/errors/location";
import React from "react";
import { useIntl } from "react-intl";
import MapGL, { Marker } from "react-map-gl";

import { ProductLocationPageFormData } from "../ProductLocationPage/ProductLocationPage";

export interface ProductLocationMapProps {
  data: ProductLocationPageFormData;
  disabled: boolean;
  errors: LocationErrorFragment[];
  onChange: FormChange;
}

const ProductLocationMap: React.FC<ProductLocationMapProps> = ({
  data,
  disabled,
  errors,
  onChange
}) => {
  const intl = useIntl();

  const [zoom, setZoom] = React.useState(12);

  const formErrors = getFormErrors(["geography"], errors);

  const handleMapMovement = (updatedViewport: any) => {
    setZoom(updatedViewport.zoom);
    onChange({
      target: {
        name: "latitude" as keyof ProductLocationPageFormData,
        value: updatedViewport.latitude
      }
    });
    onChange({
      target: {
        name: "longitude" as keyof ProductLocationPageFormData,
        value: updatedViewport.longitude
      }
    });
  };

  const handleFieldChange = (prop: ChangeEvent) => {
    onChange({
      target: {
        name: prop.target.name as keyof ProductLocationPageFormData,
        value: parseFloat(prop.target.value)
      }
    });
  };

  return (
    <Card data-test="generalInformationSection">
      <CardTitle
        title={intl.formatMessage(commonMessages.generalInformations)}
      />
      <CardContent>
        {process.env.MapboxAccessToken ? (
          <>
            <MapGL
              latitude={data.latitude}
              longitude={data.longitude}
              attributionControl={false}
              zoom={zoom}
              width="100%"
              height="420px"
              onViewportChange={handleMapMovement}
            >
              <Marker latitude={data.latitude} longitude={data.longitude}>
                <PinDrop style={{ fontSize: "45px" }} />
              </Marker>
            </MapGL>
            <FormSpacer />
          </>
        ) : null}
        <Grid>
          <TextField
            disabled={disabled}
            error={!!formErrors.geography}
            fullWidth
            helperText={getLocationErrorMessage(formErrors.geography, intl)}
            label={intl.formatMessage({
              defaultMessage: "Latitude"
            })}
            name={"latitude" as keyof ProductLocationPageFormData}
            value={data.latitude}
            onChange={handleFieldChange}
          />
          <TextField
            disabled={disabled}
            error={!!formErrors.geography}
            fullWidth
            helperText={getLocationErrorMessage(formErrors.geography, intl)}
            label={intl.formatMessage({
              defaultMessage: "Longitude"
            })}
            name={"longitude" as keyof ProductLocationPageFormData}
            value={data.longitude}
            onChange={handleFieldChange}
          />
        </Grid>
      </CardContent>
    </Card>
  );
};

ProductLocationMap.displayName = "ProductLocationMap";
export default ProductLocationMap;
