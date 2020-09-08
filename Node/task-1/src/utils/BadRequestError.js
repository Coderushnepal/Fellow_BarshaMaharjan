class BadRequestError extends Error{
    constructor(message) {
        super(message);
    this.message;
    }
}
export default BadRequestError;