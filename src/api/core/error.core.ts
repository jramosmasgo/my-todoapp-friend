export class ApplicationError extends Error {
    action: string | undefined;
    statusCode: number;
    constructor(statusCode: number, message: string, action?: string) {
        super(message);
        this.statusCode = statusCode;
        this.action = action;
    }
}