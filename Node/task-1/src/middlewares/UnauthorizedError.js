class UnauthorizedError extends Error{
    constructor(message) {
        super(message);
    this.message;
    }
}
export default UnauthorizedError;