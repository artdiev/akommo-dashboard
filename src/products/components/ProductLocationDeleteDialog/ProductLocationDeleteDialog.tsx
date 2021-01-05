import DialogContentText from "@material-ui/core/DialogContentText";
import ActionDialog from "@saleor/components/ActionDialog";
import { ConfirmButtonTransitionState } from "@saleor/components/ConfirmButton";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

export interface ProductLocationDeleteDialogProps {
  confirmButtonState: ConfirmButtonTransitionState;
  open: boolean;
  onConfirm: () => void;
  onClose: () => void;
  name: string;
}

const ProductLocationDeleteDialog: React.FC<ProductLocationDeleteDialogProps> = ({
  name,
  confirmButtonState,
  onClose,
  onConfirm,
  open
}) => {
  const intl = useIntl();

  return (
    <ActionDialog
      open={open}
      onClose={onClose}
      confirmButtonState={confirmButtonState}
      onConfirm={onConfirm}
      variant="delete"
      title={intl.formatMessage({
        defaultMessage: "Delete Location",
        description: "dialog title"
      })}
    >
      <DialogContentText>
        <FormattedMessage
          defaultMessage="Are you sure you want to delete {productLocationName}?"
          description="dialog content"
          values={{
            productLocationName: <strong>location for product {name}</strong>
          }}
        />
      </DialogContentText>
    </ActionDialog>
  );
};

ProductLocationDeleteDialog.displayName = "ProductLocationDeleteDialog";
export default ProductLocationDeleteDialog;
