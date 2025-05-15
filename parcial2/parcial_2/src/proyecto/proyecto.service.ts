import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProyectoService {
    constructor(
        @InjectRepository(ProyectoEntity)
        private readonly proyectoRepository: Repository<ProyectoEntity>,
    ) {}

    async crearProyecto(proyecto: ProyectoEntity): Promise<ProyectoEntity> {
        if (proyecto.presupuesto <= 0) {
            throw new BadRequestException('El presupuesto debe ser mayor a 0');
        }
        if (!proyecto.titulo || proyecto.titulo.length <= 15) {
            throw new BadRequestException('El título debe tener más de 15 caracteres');
        }
        return this.proyectoRepository.save(proyecto);
    }

    async avanzarProyecto(id: number): Promise<ProyectoEntity> {
        const proyecto = await this.proyectoRepository.findOne({ where: { id } });
        if (!proyecto) {
            throw new NotFoundException('Proyecto no encontrado');
        }
        if (proyecto.estado >= 4) {
            throw new BadRequestException('El proyecto ya está en su estado máximo');
        }
        proyecto.estado += 1;
        return this.proyectoRepository.save(proyecto);
    }

    async findAllEstudiantes(idProyecto: number): Promise<any[]> {
        const proyecto = await this.proyectoRepository.findOne({
            where: { id: idProyecto },
            relations: ['lider'],
        });
        if (!proyecto) {
            throw new NotFoundException('Proyecto no encontrado');
        }
        return proyecto.lider ? [proyecto.lider] : [];
    }
}
