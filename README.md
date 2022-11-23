<div align="center" style="display:flex;flex-direction:column;">
    <h2>LocalDB</h1>
    <h3>"Stores your stuff... That's it"<h3>
    - <a href="https://github.com/YisusGaming">YisusGaming</a>
    <hr />
</div>

## Still under Development
Although **localdb** is still under development, you can try it by following the [development setup](#development-setup).

----------
<br />

## The Goal
The goal of **localdb** is to be a simple database that stores all data locally in a **json** file.

----------
<br />

## About the Docs
Although docs are not available at the moment, the code is documentend using **JSDocs**.

----------
<br /><br />
<div align="center" style="display:flex;flex-direction:column;">

# Development setup

</div>

**First**, you have to clone this repository using **git clone**:
```bash
git clone https://github.com/YisusGaming/localdb.git
```
**Next**, go to the folder where the cloned repository is and install all dependencies (There are only dev dependencies though).

## npm: 
```bash
npm install
```

## yarn:
```bash
yarn
```

When all dependencies are installed, you have to run the `build` script to compile all typescript code to javascript.

*The development environment must have the TypeScript compiler (tsc) installed globally. Typescript is **not** listed as a dependency.*

## npm:
```bash
npm run build
```

## yarn:
```bash
yarn build
```

**Now**, you are ready to start the project and start coding!

## npm
```bash
npm start
```

## yarn
```bash
yarn start
```

Here's a list of all the npm scripts:
```json
"scripts": {
    "start": "node build/index.js",
    "build": "tsc",
    "build:dev": "tsc -w",
    "start:dev": "nodemon build/index.js"
}
```

# License
<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Localdb</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">YisusGaming</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.