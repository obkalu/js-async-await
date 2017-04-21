const dataPrinter = function (error, data) {
    if(error) {
        console.log(error);
    } else {
        console.log(data);
    }
}

function fetchData(dataSource, dataPrinter) {
    console.log("Reading data ...");
    dataPrinter(undefined, dataSource);
}

fetchData("some datasource", dataPrinter);
console.log("Done!");

