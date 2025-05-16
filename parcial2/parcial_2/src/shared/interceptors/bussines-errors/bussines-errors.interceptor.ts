import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { BussinesError } from 'src/shared/errors/bussines-errors';

@Injectable()
export class BusinessErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
      .pipe(catchError(error => {
        if (error.type === BussinesError.NOT_FOUND)
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        else if (error.type === BussinesError.PRECONDITION_FAILED)
            throw new HttpException(error.message, HttpStatus.PRECONDITION_FAILED);
        else if (error.type === BussinesError.BAD_REQUEST)
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        else
            throw error;
      }));
  }
}
