import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import CardTitle from "@saleor/components/CardTitle";
import { Grid } from "@saleor/components/Grid";
import { LocationErrorFragment } from "@saleor/fragments/types/LocationErrorFragment";
import { FormChange } from "@saleor/hooks/useForm";
import { commonMessages } from "@saleor/intl";
import { getFormErrors } from "@saleor/utils/errors";
import getLocationErrorMessage from "@saleor/utils/errors/location";
import React from "react";
import { useIntl } from "react-intl";
// import MapGL from "react-map-gl";

export interface ProductLocationMapProps {
  data: Record<"longitude" | "latitude", string>;
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
  const [viewport, setViewport] = React.useState({
    latitude: parseInt(data.latitude, 10),
    longitude: parseInt(data.longitude, 10),
    zoom: 12
  });

  const formErrors = getFormErrors(["geography"], errors);

  return (
    <Card data-test="generalInformationSection">
      <CardTitle
        title={intl.formatMessage(commonMessages.generalInformations)}
      />
      <CardContent>
        {/* {process.env.MapboxAccessToken ? (
          <MapGL
            {...viewport}
            width="100%"
            height="100%"
            onViewportChange={updatedViewport => setViewport(updatedViewport)}
          />
        ) : null} */}
        <Grid>
          <TextField
            disabled={disabled}
            error={!!formErrors.geography}
            fullWidth
            helperText={getLocationErrorMessage(formErrors.geography, intl)}
            label={intl.formatMessage({
              defaultMessage: "Latitude"
            })}
            name={"latitude" as keyof typeof data}
            value={data.latitude}
            onChange={onChange}
          />
          <TextField
            disabled={disabled}
            error={!!formErrors.geography}
            fullWidth
            helperText={getLocationErrorMessage(formErrors.geography, intl)}
            label={intl.formatMessage({
              defaultMessage: "Longitude"
            })}
            name={"longitude" as keyof typeof data}
            value={data.longitude}
            onChange={onChange}
          />
        </Grid>
      </CardContent>
    </Card>
  );
};

ProductLocationMap.displayName = "ProductLocationMap";
export default ProductLocationMap;
