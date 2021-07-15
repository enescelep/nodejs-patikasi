function getData(data) {
    return new Promise((resolve, reject) => {
        console.log('Veriler alınmaya çalışılıyor..');

        if(data) {
            resolve('Veriler alındı.');
        } else {
            resolve('Veriler alınamadı.');
        }
    });
}

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log('Veriler düzenleniyor..');

        if(receivedData) {
            console.log('Veriler düzenlendi.');
        } else {
            console.log('Veriler düzenlenemedi.');
        }
    });
}

getData(false)
    .then(result => {
        console.log(result);
        return cleanData(true);
    }).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
});