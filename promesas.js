const getDataPromise = new Promise(
    (resolve, reject => {
        setTimeout(() => {
            // resolve(datos);
            reject('Nose pudo: /');
        }, 3000);
    }

    )
    );
    // console .log(getDataPromise);
    console.log('inicia promesa')
    getDataPromise.then((result) => {
        console.log(result);
        console.log('Termina promesa');
    }).catch(error => console.log(error));
