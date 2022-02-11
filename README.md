## ETH-Lottery

## Fix semantic.css bug

### First:

```shell
npm install --dev @semantic-ui-react/css-patch
```

### Second add this line in "package.json" file:

```shell
"scripts": {
  "postinstall": "semantic-ui-css-patch"
}
```

### And then remove extra ";" in "semantic-ui-css/semantic.css" file:

```shell
@font-face {
  font-family: 'Step';
  src: url(data:application/x-font-ttf;charset=utf-8;;base64,AAEAAAAOAIAAAw... // this line
}
```

Please note the ";" between 'utf-8' and 'base64'.

Note: please use `import 'semantic-ui-css/semantic.css'` instead of `import 'semantic-ui-css/semantic.min.css` in '
index.js''.

