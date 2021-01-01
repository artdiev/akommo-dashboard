{
  /* <div className={classes.empty}>
<Typography variant="h5">
  <FormattedMessage defaultMessage="There is no address to show for this customer" />
</Typography>
<Typography className={classes.description}>
  <FormattedMessage defaultMessage="This customer doesn’t have any adresses added to his address book. You can add address using the button below." />
</Typography>
<Button
  className={classes.addButton}
  color="primary"
  variant="contained"
  onClick={onAdd}
>
  <FormattedMessage
    defaultMessage="Add address"
    description="button"
  />
</Button>
</div> */
}

import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardTitle from "@saleor/components/CardTitle";
import { ProductErrorFragment } from "@saleor/fragments/types/ProductErrorFragment";
import { FormChange } from "@saleor/hooks/useForm";
import { FormsetChange } from "@saleor/hooks/useFormset";
import { ProductDetails_location } from "@saleor/products/types/ProductDetails";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

export interface ProductLocationProps {
  errors: ProductErrorFragment[];
  location: ProductDetails_location;
  loading?: boolean;
  // onChange: FormsetChange;
  // onFormDataChange: FormChange;
  // onWarehouseStockAdd: (warehouseId: string) => void;
  // onWarehouseStockDelete: (warehouseId: string) => void;
  // onWarehouseConfigure: () => void;
}

// const useStyles = makeStyles(
//   theme => ({
//     colAction: {
//       padding: 0,
//       width: ICONBUTTON_SIZE + theme.spacing()
//     },
//     colName: {},
//     colQuantity: {
//       textAlign: "right",
//       width: 200
//     },
//     editWarehouses: {
//       marginRight: -theme.spacing()
//     },
//     input: {
//       padding: theme.spacing(1.5),
//       textAlign: "right"
//     },
//     inputComponent: {
//       width: 100
//     },
//     menuItem: {
//       "&:not(:last-of-type)": {
//         marginBottom: theme.spacing(2)
//       }
//     },
//     noWarehouseInfo: {
//       marginTop: theme.spacing()
//     },
//     paper: {
//       padding: theme.spacing(2)
//     },
//     popper: {
//       boxShadow: `0px 5px 10px 0 ${fade(theme.palette.common.black, 0.05)}`,
//       marginTop: theme.spacing(1),
//       zIndex: 2
//     },
//     quantityContainer: {
//       paddingTop: theme.spacing()
//     },
//     quantityHeader: {
//       alignItems: "center",
//       display: "flex",
//       justifyContent: "space-between"
//     },
//     skuInputContainer: {
//       display: "grid",
//       gridColumnGap: theme.spacing(3) + "px",
//       gridTemplateColumns: "repeat(2, 1fr)"
//     }
//   }),
//   {
//     name: "ProductStocks"
//   }
// );

const ProductLocation: React.FC<ProductLocationProps> = ({
  errors,
  location,
  loading
}) => {
  // const classes = useStyles({});
  const intl = useIntl();
  const [isExpanded, setExpansionState] = React.useState(false);

  const actionBtn = location ? (
    <Button color="secondary" variant="text">
      <FormattedMessage
        defaultMessage="Remove the location"
        description="button"
      />
    </Button>
  ) : (
    <Button color="primary" variant="text">
      <FormattedMessage defaultMessage="Add a location" description="button" />
    </Button>
  );

  return (
    <Card>
      <CardTitle
        title={intl.formatMessage({
          defaultMessage: "Location",
          description: "product location, section header",
          id: "productLocationHeader"
        })}
        toolbar={actionBtn}
      />
      <CardContent>
        {location ? (
          <div>text</div>
        ) : (
          <Typography>
            <div>
              <span>
                <FormattedMessage
                  defaultMessage="There is no location created for this element."
                  description="header"
                />
              </span>
            </div>
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

ProductLocation.displayName = "ProductLocation";
export default ProductLocation;
