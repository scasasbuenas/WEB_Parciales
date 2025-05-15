export function BussinesLogicException(message: string, type: number) {
    this.message = message;
    this.type = type;
  }
   
  export enum BussinesError {
    NOT_FOUND,
    PRECONDITION_FAILED,
    BAD_REQUEST
  }