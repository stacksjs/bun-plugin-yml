<p align="center"><img src=".github/art/cover.jpg" alt="Social Card of this repo"></p>

[![npm version][npm-version-src]][npm-version-href]
[![GitHub Actions][github-actions-src]][github-actions-href]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm downloads][npm-downloads-src]][npm-downloads-href]

# bun-plugin-yml

A simple loader for your yml & yaml files.

## Features

- Simple `.yml` & `.yaml` file loader
- Powered by js-yaml

## Usage

```bash
bun install -d bun-plugin-yml
```

Next, ensure you are preloading the plugin in your `bunfig.toml`:

```toml
preload = [
  "./node_modules/bun-plugin-yml/src/index.ts",
  # ...
]
```

You may now use it in your project:

```ts
import config from './config/settings.yml'

// Example usage of loaded YAML content
console.log(`Application Name: ${config.appName}`)
console.log(`Version: ${config.version}`)
```

## Testing

```bash
bun test
```

## Changelog

Please see our [releases](https://github.com/stacksjs/bun-plugin-yml/releases) page for more information on what has changed recently.

## Contributing

Please review the [Contributing Guide](https://github.com/stacksjs/contributing) for details.

## Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/stacksjs/stacks/discussions)

For casual chit-chat with others using this package:

[Join the Stacks Discord Server](https://discord.gg/stacksjs)

## Postcardware

You will always be free to use any of the Stacks OSS software. We would also love to see which parts of the world Stacks ends up in. _Receiving postcards makes us happy—and we will publish them on our website._

Our address: Stacks.js, 5710 Crescent Park #107, Playa Vista 90094, CA.

## Sponsors

We would like to extend our thanks to the following sponsors for funding Stacks development. If you are interested in becoming a sponsor, please reach out to us.

- [JetBrains](https://www.jetbrains.com/)
- [The Solana Foundation](https://solana.com/)

## Credits

Many thanks to the following core technologies & people who have contributed to this package:

- [js-yaml](https://github.com/nodeca/js-yaml)
- [Chris Breuer](https://github.com/chrisbbreuer)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [LICENSE](https://github.com/stacksjs/stacks/tree/main/LICENSE.md) for more information.

Made with 💙

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/bun-plugin-yml?style=flat-square
[npm-version-href]: https://npmjs.com/package/bun-plugin-yml

[npm-downloads-src]: https://img.shields.io/npm/dm/bun-plugin-yml?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/bun-plugin-yml

[github-actions-src]: https://img.shields.io/github/actions/workflow/status/stacksjs/bun-plugin-yml/ci.yml?style=flat-square&branch=main
[github-actions-href]: https://github.com/stacksjs/bun-plugin-yml/actions?query=workflow%3Aci
