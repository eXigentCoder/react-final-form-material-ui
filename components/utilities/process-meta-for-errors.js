export function processMetaForErrors({
    error,
    touched,
    pristine,
    dirtySinceLastSubmit,
    submitError,
    submitFailed,
}) {
    const noError = { errorMessage: undefined, showError: false };
    if (pristine && !submitFailed) {
        return noError;
    }
    if (submitError && !dirtySinceLastSubmit) {
        return { errorMessage: submitError, showError: true };
    }
    if (error && touched) {
        return { errorMessage: error, showError: true };
    }
    return noError;
}
