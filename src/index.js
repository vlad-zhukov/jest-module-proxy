const defaultImportProxy = new Proxy(
    {},
    {
        get(target, key) {
            return key;
        },
    }
);

const importProxy = new Proxy(
    {},
    {
        get(target, key) {
            if (key === '__esModule') {
                return true;
            }
            if (key === 'default') {
                return defaultImportProxy;
            }
            return key;
        },
    }
);

module.exports = importProxy;
