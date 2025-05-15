import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfesorEntity } from './profesor.entity/profesor.entity';

@Injectable()
export class ProfesorService {
    constructor(
        @InjectRepository(ProfesorEntity)
        private readonly profesorRepository: Repository<ProfesorEntity>,
    ) {}

    async crarProfesor(profesor: ProfesorEntity): Promise<ProfesorEntity> {
        const extensionStr = profesor.extension.toString();
        if (extensionStr.length !== 5) {
            throw new BadRequestException('La extensión debe tener 5 dígitos');
        }
        return this.profesorRepository.save(profesor);
    }

    async asignarEvaluador(id: number): Promise<void> {
        const profesor = await this.profesorRepository.findOne({
            where: { id },
            relations: ['evaluaciones'],
        });
        if (!profesor) {
            throw new NotFoundException('Profesor no encontrado');
        }
        const evaluacionesActivas = profesor.evaluaciones?.length || 0;
        if (evaluacionesActivas >= 3) {
            throw new BadRequestException('El profesor no puede ser asignado como evaluador porque ya tiene 3 o más evaluaciones activas');
        }
        profesor.esParEvaluador = true;
        await this.profesorRepository.save(profesor);
    }
}