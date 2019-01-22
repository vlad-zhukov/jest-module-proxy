# jest-module-proxy · [![npm][1]][2] [![Build Status][3]][4] [![codecov][5]][6]

An identity object for mocking imports inside Jest tests. A drop-in replacement for
[`identity-obj-proxy`](https://github.com/keyz/identity-obj-proxy) that works with modern Babel.

## Getting Started

```bash
yarn add -D jest-module-proxy
```

Add the following to your Jest config:

```
"moduleNameMapper": {
  "\\.css$": "jest-module-proxy"
},
```

And for a React component like this:

```jsx
import React from 'react';
import styles from './App.module.css';

export default () => (
    <div className={styles.root}>
        <h1 className={styles.hello}>Hello, world!</h1>
    </div>
);
```

```
exports[`App renders correctly 1`] = `
<div
  class="root"
>
  <h1
    class="hello"
  >
    Hello, world!
  </h1>
</div>
`;
```

---

[1]: https://img.shields.io/npm/v/jest-module-proxy.svg
[2]: https://npm.im/jest-module-proxy
[3]: https://travis-ci.com/vlad-zhukov/jest-module-proxy.svg?branch=master
[4]: https://travis-ci.com/vlad-zhukov/jest-module-proxy
[5]: https://codecov.io/gh/vlad-zhukov/jest-module-proxy/branch/master/graph/badge.svg
[6]: https://codecov.io/gh/vlad-zhukov/jest-module-proxy
