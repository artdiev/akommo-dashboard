import { Button, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardTitle from "@saleor/components/CardTitle";
import Skeleton from "@saleor/components/Skeleton";
import { ProductErrorFragment } from "@saleor/fragments/types/ProductErrorFragment";
import useNavigator from "@saleor/hooks/useNavigator";
import { ProductDetails_product_location } from "@saleor/products/types/ProductDetails";
import { productLocationUrl } from "@saleor/products/urls";
import React, { useMemo } from "react";
import { FormattedMessage, useIntl } from "react-intl";

export interface ProductLocationProps {
  errors: ProductErrorFragment[];
  productId: string;
  location: ProductDetails_product_location;
  loading?: boolean;
}

const ProductLocation: React.FC<ProductLocationProps> = ({
  productId,
  location,
  loading
}) => {
  const intl = useIntl();
  const navigate = useNavigator();

  const handleAction = () => {
    if (location) {
      navigate(productLocationUrl(productId, location.id));
    } else {
      navigate(productLocationUrl(productId, "add"));
    }
  };

  const addressText = useMemo(() => {
    const res = [];
    for (const field in location?.address) {
      if (
        location.address.hasOwnProperty(field) &&
        location.address[field] &&
        field !== "id" &&
        field !== "__typename"
      ) {
        const node = (
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              {field === "country"
                ? location.address[field].country
                : location.address[field]}
            </Typography>
          </Grid>
        );
        res.push(node);
      }
    }
    return res;
  }, [location]);

  let cardContent = (
    <Typography>
      <div>
        <span>
          <FormattedMessage
            defaultMessage="There is no location created for this element"
            description="header"
          />
        </span>
      </div>
    </Typography>
  );

  if (loading) {
    cardContent = (
      <CardContent>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </CardContent>
    );
  } else if (location) {
    cardContent = <Grid container>{addressText}</Grid>;
  }

  return (
    <Card>
      <CardTitle
        title={intl.formatMessage({
          defaultMessage: "Location",
          description: "product location, section header",
          id: "productLocationHeader"
        })}
        toolbar={
          <Button color="primary" variant="text" onClick={handleAction}>
            {location ? (
              <FormattedMessage
                defaultMessage="Edit product location"
                description="button"
              />
            ) : (
              <FormattedMessage
                defaultMessage="Create a product location"
                description="button"
              />
            )}
          </Button>
        }
      />
      <CardContent>{cardContent}</CardContent>
    </Card>
  );
};

ProductLocation.displayName = "ProductLocation";
export default ProductLocation;
