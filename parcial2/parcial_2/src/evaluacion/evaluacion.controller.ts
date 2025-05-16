import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/bussines-errors/bussines-errors.interceptor';
import { EvaluacionEntity } from './evaluacion.entity/evaluacion.entity';
import { EvaluacionService } from './evaluacion.service';

@Controller('evaluacion')
@UseInterceptors(BusinessErrorsInterceptor)
export class EvaluacionController {
    constructor(private readonly evaluacionService: EvaluacionService) {}

    @Post()
    async crearEvaluacion(@Body() evaluacion: EvaluacionEntity): Promise<EvaluacionEntity> {
        return this.evaluacionService.crearEvaluacion(evaluacion);
    }
}
