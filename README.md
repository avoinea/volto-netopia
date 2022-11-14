# volto-netopia

[Netopia Payments](https://netopia-payments.com/) for [Volto](https://github.com/plone/volto). Intended to be used with [collective.netopia](https://github.com/avoinea/collective.netopia)

## Install

### New Volto Project

Create a Volto project

```shell
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @plone-collective/volto-netopia
cd my-volto-project
```

Install new add-on and restart Volto:

```shell
yarn install
yarn start
```

### Existing Volto Project

If you already have a Volto project, just update `package.json`:

```JSON
"addons": [
  "@plone-collective/volto-netopia"
],

"dependencies": {
  "@plone-collective/volto-netopia": "*"
}
```

## Contribute

- [Issue Tracker](https://github.com/avoinea/volto-netopia/issues)
- [Source Code](https://github.com/avoinea/volto-netopia/)

## Credits

The development of this plugin has been kindly sponsored by:

- [Alin Voinea](https://www.avoinea.com/)

## License

The project is licensed under [MIT](./LICENSE).
