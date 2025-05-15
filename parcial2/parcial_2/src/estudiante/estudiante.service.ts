import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';
import { BussinesError, BussinesLogicException } from '../shared/errors/bussines-errors';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EstudianteService {
    constructor(
        @InjectRepository(EstudianteEntity)
        private readonly estudianteRepository: Repository<EstudianteEntity>,
    ) {}

    async crearEstudiante(estudiante: EstudianteEntity): Promise<EstudianteEntity> {
        if (estudiante.promedio <= 3.2 || estudiante.semestre < 4) {
            throw new BussinesLogicException('El promedio debe ser mayor a 3.2 y el semestre mayor o igual a 4', BussinesError.PRECONDITION_FAILED);
        }
        return this.estudianteRepository.save(estudiante);
    }

    async eliminarEstudiante(id: number): Promise<void> {
        const estudiante = await this.estudianteRepository.findOne({
            where: { id },
            relations: ['proyectos'],
        });
        if (!estudiante) {
            throw new BussinesLogicException('Estudiante no encontrado', BussinesError.NOT_FOUND);
        }
        const tieneProyectosActivos = estudiante.proyectos?.some(p => p.estado !== 0);
        if (tieneProyectosActivos) {
            throw new BussinesLogicException('No se puede eliminar un estudiante con proyectos activos', BussinesError.PRECONDITION_FAILED);
        }
        await this.estudianteRepository.delete(id);
    }
}
