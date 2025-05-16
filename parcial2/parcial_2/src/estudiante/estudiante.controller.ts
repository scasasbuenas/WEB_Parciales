import { Controller, Post, Body, Delete, Param, HttpCode, UseInterceptors } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';
import { BusinessErrorsInterceptor } from '../shared/interceptors/bussines-errors/bussines-errors.interceptor';

@Controller('estudiante')
@UseInterceptors(BusinessErrorsInterceptor)
export class EstudianteController {
    constructor(private readonly estudianteService: EstudianteService) {}

    @Post()
    async crearEstudiante(@Body() estudiante: EstudianteEntity): Promise<EstudianteEntity> {
        return this.estudianteService.crearEstudiante(estudiante);
    }

    @Delete(':id')
    @HttpCode(204)
    async eliminarEstudiante(@Param('id') id: number): Promise<void> {
        return this.estudianteService.eliminarEstudiante(id);
    }
}
