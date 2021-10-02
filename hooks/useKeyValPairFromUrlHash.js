const useKeyValPairFromUrlHash = (url) => {
    const [, ...pairs] = url.split('#');
    let keyVals = {};
    pairs.forEach((pair) => {
        const [key, val] = pair.split('=');
        keyVals[key] = decodeURIComponent(val);
    });
    return keyVals;
};

export default useKeyValPairFromUrlHash;
