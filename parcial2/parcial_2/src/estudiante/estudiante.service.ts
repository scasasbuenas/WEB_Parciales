import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';

@Injectable()
export class EstudianteService {
    constructor(
        @InjectRepository(EstudianteEntity)
        private readonly estudianteRepository: Repository<EstudianteEntity>,
    ) {}

    async crearEstudiante(data: Partial<EstudianteEntity>): Promise<EstudianteEntity> {
        if (data.promedio <= 3.2 || data.semestre < 4) {
            throw new BadRequestException('El promedio debe ser mayor a 3.2 y el semestre mayor o igual a 4');
        }
        const estudiante = this.estudianteRepository.create(data);
        return this.estudianteRepository.save(estudiante);
    }

    async eliminarEstudiante(id: number): Promise<void> {
        const estudiante = await this.estudianteRepository.findOne({
            where: { id },
            relations: ['proyectos'],
        });
        if (!estudiante) {
            throw new NotFoundException('Estudiante no encontrado');
        }
        const tieneProyectosActivos = estudiante.proyectos?.some(p => p.estado !== 0);
        if (tieneProyectosActivos) {
            throw new BadRequestException('No se puede eliminar un estudiante con proyectos activos');
        }
        await this.estudianteRepository.delete(id);
    }
}
