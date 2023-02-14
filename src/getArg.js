const getArgs = (args) => {
    const [executer, file, ...rest] = args;
    return ({ URL: rest[0].slice(1) })
}

const inputWebsite = () => {
    const args = getArgs(process.argv);
    if (args.URL) {
        return args.URL
    }
}
module.exports = { getArgs, inputWebsite }
