export function waitSync (time){
    const start = Date.now();
    while (Date.now() < start + time) {
        // do nothing
    }
}