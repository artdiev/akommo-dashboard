# Saleor Dashboard

A GraphQL-powered, single-page dashboard application for [Saleor](https://github.com/mirumee/saleor/).
This is a fork of the original Mirumee dashboard with customized logos, style and added views for our custom saleor API.

Please note that logos included in this fork are the property of their respective owners.

## Demo

See the [public demo](https://demo.saleor.io/dashboard/) of Saleor Dashboard!

Or launch the demo on a free Heroku instance.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js 10.0+
- A running instance of [Saleor](https://github.com/mirumee/saleor/).

### Installing

Clone the repository:

```
$ git clone https://github.com/mirumee/saleor-dashboard.git
```

Enter the project directory:

```
$ cd saleor-dashboard
```

#### Using stable release

To use the official stable release, checkout to a release tag:

```
$ git checkout 2.10.1
```

See the list of all releases here: https://github.com/mirumee/saleor-dashboard/releases/

#### Using development version

If you want to use the latest development version, checkout to the `master` branch:

```
$ git checkout master
```

Install NPM dependencies:

```
$ npm i
```

### Configuration

Environment variables available for configuration:

- `API_URI` (required) - URI of a running instance of Saleor GraphQL API.
  If you are running Saleor locally with the default settings, set `API_URI` to: `http://localhost:8000/graphql/`.

- `MapboxAccessToken` - Required for loading the mapbox map for previewing locations.
  If you don't provided it the app will not load the map.

- `APP_MOUNT_URI` - URI at which the Dashboard app will be mounted.
  E.g. if you set `APP_MOUNT_URI` to `/dashboard/`, your app will be mounted at `http://localhost:9000/dashboard/`.

- `STATIC_URL` - URL where the static files are located.
  E.g. if you use S3 bucket, you should set it to the bucket's URL. By default Saleor assumes you serve static files from the root of your site at `http://localhost:9000/`.

#### Quick Links environment variables:

- `DOCS_URL` - URL to other (technical) documentation.

- `BLOG_URL` - URL to the blog CMS admin panel.

- `STOREFRONT_URL` - URL to the main (gatsby) storefront.

### Development

To start the development server run:

```
$ npm start
```

### Production

To build the application bundle run:

```
$ npm run build
```

#### Crafted with ❤️ by [Mirumee Software](https://mirumee.com)
