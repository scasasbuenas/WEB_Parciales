import { Controller, Post, Body, UseInterceptors, Put, Param, Get } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { BusinessErrorsInterceptor } from '../shared/interceptors/bussines-errors/bussines-errors.interceptor';

@Controller('proyecto')
@UseInterceptors(BusinessErrorsInterceptor)
export class ProyectoController {
    constructor(private readonly proyectoService: ProyectoService) {}

    @Post()
    async crearProyecto(@Body() proyecto: ProyectoEntity): Promise<ProyectoEntity> {
        return this.proyectoService.crearProyecto(proyecto);
    }

    @Put(':proyectoId')
    async avanzarProyecto(@Param('proyectoId') proyectoId: number): Promise<ProyectoEntity> {
        return this.proyectoService.avanzarProyecto(proyectoId);
    }

    @Get(':proyectoId/estudiantes')
    async findAllEstudiantes(@Param('proyectoId') proyectoId: number): Promise<any[]> {
        return this.proyectoService.findAllEstudiantes(proyectoId);
    }


}
