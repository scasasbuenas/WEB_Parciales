import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { Repository } from 'typeorm';
import { BussinesLogicException, BussinesError } from '../shared/errors/bussines-errors';

@Injectable()
export class ProyectoService {
    constructor(
        @InjectRepository(ProyectoEntity)
        private readonly proyectoRepository: Repository<ProyectoEntity>,
    ) {}

    async crearProyecto(proyecto: ProyectoEntity): Promise<ProyectoEntity> {
        if (proyecto.presupuesto <= 0) {
            throw new BussinesLogicException('El presupuesto debe ser mayor a 0', BussinesError.PRECONDITION_FAILED);
        }
        if (!proyecto.titulo || proyecto.titulo.length <= 15) {
            throw new BussinesLogicException('El título debe tener más de 15 caracteres', BussinesError.PRECONDITION_FAILED);
        }
        return this.proyectoRepository.save(proyecto);
    }

    async avanzarProyecto(id: number): Promise<ProyectoEntity> {
        const proyecto = await this.proyectoRepository.findOne({ where: { id } });
        if (!proyecto) {
            throw new BussinesLogicException('Proyecto no encontrado', BussinesError.NOT_FOUND);
        }
        if (proyecto.estado >= 4) {
            throw new BussinesLogicException('El proyecto ya está en su estado máximo', BussinesError.PRECONDITION_FAILED);
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
            throw new BussinesLogicException('Proyecto no encontrado', BussinesError.NOT_FOUND);
        }
        return proyecto.lider ? [proyecto.lider] : [];
    }
}
