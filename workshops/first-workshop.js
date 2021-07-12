const pi = Math.PI

const daireYaricapiAlani = (r) => {
    const alan = (pi * (r**2)).toFixed(2);
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${alan}`);
};

daireYaricapiAlani(15);