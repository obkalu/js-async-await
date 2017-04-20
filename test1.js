function wait(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}

async function test() {
    for (i=0; i < 10; ++i) {
        if (i < 5) {
            await wait(2000);
        }
        console.log(i + ". Hello World!");
    }
}

test();
