## ETH-Lottery

## Fix import web3 bug

Please check the description of this article: https://bcqaw.com/209004732.html.  
Please use the following command to import Web3:

```javascript
import Web3 from "web3/dist/web3.min";
```

## Fix window.web3 bug

The MetaMask window.web3.currentProvider shim is deprecated; use window.ethereum instead. For details,
see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3

```javascript
web3.setProvider(window.ethereum)
```

## Fix semantic.css bug

### First:

```shell
npm install --dev @semantic-ui-react/css-patch
```

### Second add this line in "package.json" file:

```json
{
  "scripts": {
    "postinstall": "semantic-ui-css-patch"
  }
}

```

### And then remove extra ";" in "semantic-ui-css/semantic.css" file:

```
@font-face {
  font-family: 'Step';
  src: url(data:application/x-font-ttf;charset=utf-8;;base64,AAEAAAAOAIAAAw... // this line
}
```

Please note the ";" between 'utf-8' and 'base64'.

Note: please use `import 'semantic-ui-css/semantic.css'` instead of `import 'semantic-ui-css/semantic.min.css` in '
index.js''.

