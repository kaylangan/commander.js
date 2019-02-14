
const SKIPPED_MESSAGE = '**SKIPPED**';

exports.skipOnWindows = function() {
    if (process.platform == 'win32') {
        process.stdout.write(SKIPPED_MESSAGE);
        return true;
    }
}

exports.isSkipped = function(stdout) {
    return stdout.indexOf(SKIPPED_MESSAGE) == 0;
}