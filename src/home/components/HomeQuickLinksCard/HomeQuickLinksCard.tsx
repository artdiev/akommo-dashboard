import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExternalLink from "@saleor/components/ExternalLink";
import React from "react";

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
    }
  }),
  { name: "HomeQuickLinksCard" }
);

interface HomeQuickLinksCardProps {
  title: string;
  children?: React.ReactNode;
}

const HomeQuickLinksCard: React.FC<HomeQuickLinksCardProps> = props => {
  const { children, title } = props;
  const links = [
    process.env.MANUAL_URL,
    process.env.DOCS_URL,
    process.env.BLOG_URL,
    process.env.STOREFRONT_URL
  ];
  const linksDesc = [
    "Dashboard Manual",
    "Technical Documentation",
    "Blog CMS",
    "Client website"
  ];

  const classes = useStyles(props);

  if (
    !process.env.MANUAL_URL &&
    !process.env.DOCS_URL &&
    !process.env.BLOG_URL &&
    !process.env.STOREFRONT_URL
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
                  key={link}
                  href={link}
                  typographyProps={{ variant: "subtitle1" }}
                >
                  {linksDesc[idx]}
                </ExternalLink>
              );
            }
          })}
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
