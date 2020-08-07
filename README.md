# @dekproject/thumbor

Thumbor interface plugin for DEK

What does this plugin do?

* Control configuration for connection to Thumbor in production development mode in a simplified way with **dotenv**
* Performs connection implementation along the lines ES6 being pre requirement to start the project

## Instalation

To install the bootstrap we recommend using the CLI

```bash
$ yarn add @dekproject/thumbor --save
$ nano .env
```

In the .env file add the following settings

```
THUMBOR_KEY=MYKEY
THUMBOR_URL="https://thumbor.mydomain.com"
```

## Usage

Using in the standard DEK skeleton

```js
import { $, app, thumbor } from "@dekproject/scope";

$.wait("thumbor").then(() => {
    let url = thumbor.setImagePath('00223lsvrnzeaf42.png').resize(50,50).buildUrl();
    console.log(url);
});
```
