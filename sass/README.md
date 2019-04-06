# sass-boilerplate ![npm badge](https://img.shields.io/npm/v/@sayhelloelijah/sass-boilerplate.svg)

A Sass Boilerplate directory structure that helps guide in a SMACSS influenced SASS architecture, with **no dependencies**

## Installaton
```bash
npm i @sayhelloelijah/sass-boilerplate
mv {path_to_project}/node_modules/\@sayhelloelijah/sass-boilerplate {path_to_asset_director}/{rename_directory}
```

## `base`
The `base` directory's purpose is to contain all default styles related to base elements (_body, p, a, input, etc..._) and browser resets.

**Note:** This directory should **not** contain any classes or ids.

```css
body {
    margin: 0;
    padding: 0;
}

p {
    font: {
        size: 16px;
        weight: 400;
    }
}
```

## `dependencies`
The `dependencies` directory is used primarily for importing various dependency files. (_ie. Bootstrap, normalize, modernizer, etc..._)

## `modules`
The `modules` directory contains all styles related to the site's various modules. (_navigation, cards, header, footer, sidebar, etc..._)

```css
.nav {
    /* Code here */

    &__list {
        /* Code here */
    }
}
```

## `utilities`
The `utilities` directory is used to contain all mixins, functions, variables, or other things that are SASS based and would be useful for you in other areas of your project.
