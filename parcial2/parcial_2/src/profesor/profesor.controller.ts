import { Controller, Post, Body, UseInterceptors, Put, Param } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../shared/interceptors/bussines-errors/bussines-errors.interceptor';
import { ProfesorService } from './profesor.service';
import { ProfesorEntity } from './profesor.entity/profesor.entity';

@Controller('profesor')
@UseInterceptors(BusinessErrorsInterceptor)
export class ProfesorController {
    constructor(private readonly profesorService: ProfesorService) {}

    @Post()
    async crearProfesor(@Body() profesor: ProfesorEntity): Promise<ProfesorEntity> {
        return this.profesorService.crearProfesor(profesor);
    }

    @Put(':profesorId')
    async asignarEvaluador(@Param('profesorId') profesorId: number): Promise<void> {
        return this.profesorService.asignarEvaluador(profesorId);
    }
}
