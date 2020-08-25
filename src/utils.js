import glob from glob;

glob("!?(_)*.js", undefined, (error, files) => {
    if (error) { console.error('error loading model files')};
    files.forEach(console.log)
});