import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfesorEntity } from './profesor.entity/profesor.entity';
import { BussinesError, BussinesLogicException } from '../shared/errors/bussines-errors';

@Injectable()
export class ProfesorService {
    constructor(
        @InjectRepository(ProfesorEntity)
        private readonly profesorRepository: Repository<ProfesorEntity>,
    ) {}

    async crearProfesor(profesor: ProfesorEntity): Promise<ProfesorEntity> {
        const extensionStr = profesor.extension.toString();
        if (extensionStr.length !== 5) {
            throw new BussinesLogicException('La extensión debe tener 5 dígitos', BussinesError.PRECONDITION_FAILED);
        }
        return this.profesorRepository.save(profesor);
    }

    async asignarEvaluador(id: number): Promise<void> {
        const profesor = await this.profesorRepository.findOne({
            where: { id },
            relations: ['evaluaciones'],
        });
        if (!profesor) {
            throw new BussinesLogicException('Profesor no encontrado', BussinesError.NOT_FOUND);
        }
        const evaluacionesActivas = profesor.evaluaciones?.length || 0;
        if (evaluacionesActivas >= 3) {
            throw new BussinesLogicException('El profesor no puede ser asignado como evaluador porque ya tiene 3 o más evaluaciones activas', BussinesError.PRECONDITION_FAILED);
        }
        profesor.esParEvaluador = true;
        await this.profesorRepository.save(profesor);
    }
}