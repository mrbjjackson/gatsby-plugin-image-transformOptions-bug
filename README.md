<h1 align="center">
  Gatsby minimal starter
</h1>

## Gatsby bug demo repo

This repo demonstrates a bug I found while using gatsby-plugin-image.

I was trying to produce two versions of the same image from a graphql repo (two different duotone versions using separate graphql aliases).

I found that if all parameters in the graphql query are the same, except for the `transformOptions: { duotone }` settings, two different images are not generated. Rather the same image is displayed twice.

Strangely, I was able to fix this by adding different `quality` settings to each of the query parameters. If I add quality settings to each image query, then the different images display correctly.
