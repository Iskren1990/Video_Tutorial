module.exports = function time() {
    console.infoCopy = console.info.bind(console);
    console.info = function(data){
        data += "\033[39m"
        const time = '\x1B[34m[' + new Date().toLocaleString("bg-BG") + '] :';
        this.infoCopy(time, data);
    };

    console.errCopy = console.error.bind(console);
    console.error = function(data){
        data += "\033[39m"
        const time = '\033[31m[' + new Date().toLocaleString("bg-BG") + '] :';
        this.errCopy(time, data);
    };
}

