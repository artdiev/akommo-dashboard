import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ConfirmButton, {
  ConfirmButtonTransitionState
} from "@saleor/components/ConfirmButton";
import ExternalLink from "@saleor/components/ExternalLink";
import useNotifier from "@saleor/hooks/useNotifier";
import React, { useState } from "react";

const useStyles = makeStyles(
  theme => ({
    cardContent: {
      "&:last-child": {
        padding: theme.spacing(2, 3)
      },
      display: "grid",
      gridColumnGap: theme.spacing(3),
      gridTemplateColumns: "1fr 64px"
    },
    cardSpacing: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(1)
      },
      marginBottom: theme.spacing(3)
    },
    cardSubtitle: {
      fontSize: 12,
      height: "20px",
      lineHeight: 0.9
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: 500 as 500
    },
    value: {
      textAlign: "right"
    },
    spaced: {
      margin: "16px 0 16px 0"
    }
  }),
  { name: "HomeQuickLinksCard" }
);

interface HomeQuickLinksCardProps {
  title: string;
  children?: React.ReactNode;
}

const HomeQuickLinksCard: React.FC<HomeQuickLinksCardProps> = props => {
  const [buttonState, setButtonState] = useState<ConfirmButtonTransitionState>(
    "default"
  );
  const notify = useNotifier();

  const rebuildStorefront = async () => {
    setButtonState("loading");
    const response = await fetch(process.env.STOREFRONT_WEBHOOK, {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });

    if (response.ok) {
      setButtonState("success");
      notify({
        status: "success",
        title: "Rebuild Started",
        text: "May take up to 15min"
      });
    } else {
      setButtonState("error");
    }
  };

  const { children, title } = props;
  const links = [
    process.env.DOCS_URL,
    process.env.BLOG_URL,
    process.env.STOREFRONT_URL
  ];
  const linksDesc = ["Documentation & Roadmap", "Blog CMS", "Storefront"];

  const classes = useStyles(props);

  if (
    !process.env.DOCS_URL &&
    !process.env.BLOG_URL &&
    !process.env.STOREFRONT_URL &&
    !process.env.STOREFRONT_WEBHOOK
  ) {
    return null;
  }

  return (
    <Card className={classes.cardSpacing}>
      <CardContent className={classes.cardContent}>
        <div>
          <Typography className={classes.cardTitle} variant="subtitle1">
            {title}
          </Typography>
          {links.map((link, idx) => {
            if (link) {
              return (
                <ExternalLink
                  className={classes.spaced}
                  key={link}
                  href={link}
                  typographyProps={{ variant: "subtitle1" }}
                >
                  {linksDesc[idx]}
                </ExternalLink>
              );
            }
          })}
          {process.env.STOREFRONT_WEBHOOK && (
            <ConfirmButton
              className={classes.spaced}
              disabled={buttonState !== "default"}
              onClick={rebuildStorefront}
              transitionState={buttonState}
            >
              Rebuild Storefront
            </ConfirmButton>
          )}
          <Typography
            className={classes.value}
            color="textPrimary"
            variant="h4"
          >
            {children}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
HomeQuickLinksCard.displayName = "HomeAnalyticsCard";
export default HomeQuickLinksCard;
