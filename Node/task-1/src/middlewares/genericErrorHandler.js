import {StatusCodes} from 'http-status-codes';
import NotFoundError from '../utils/NotFoundError';
import BadRequestError from '../utils/BadRequestError';
import UnauthorizedError from '../utils/UnauthorizedError';
 

export default function genericErrorHandler(err, req, res, next) {
    if(err.isJoi) {
        res.status(StatusCodes.BAD_REQUEST).json({
            code: StatusCodes.BAD_REQUEST,
            message: err.name,
            details: err.details.map(detail => detail.message)
        });
    }

    if(err instanceof NotFoundError) {
        res.status(StatusCodes.NOT_FOUND).json({
            code: StatusCodes.NOT_FOUND,
            message: err.message
        });
    }

    if(err instanceof BadRequestError) {
        res.status(StatusCodes.BAD_REQUEST).json({
            code: StatusCodes.BAD_REQUEST,
            message: err.message
        });
    }

    if(err instanceof UnauthorizedError) {
        res.status(StatusCodes.UNAUTHORIZED).json({
            code: StatusCodes.UNAUTHORIZED,
            message: err.message
        });
    }

    const errorMessage = 
    err.message ? 
        err.message 
            :
            StatusCodes.getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR);   
    if(err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json( {
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: errorMessage
    });
}
}