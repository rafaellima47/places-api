import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
    
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): void {
      console.log(exception);
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
  
      const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
      const message = exception instanceof HttpException ? exception.message : 'Internal server error';
  
      const errorResponse = {
        statusCode: status,
        message: message
      };
  
      const formattedResponse = {
        success: false,
        data: {},
        metadata: {},
        errors: [errorResponse],
      };
  
      response.status(status).json(formattedResponse);
    }
  }
    