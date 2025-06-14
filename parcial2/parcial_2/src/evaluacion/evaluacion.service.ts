import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EvaluacionEntity } from './evaluacion.entity/evaluacion.entity';
import { BussinesError, BussinesLogicException } from '../shared/errors/bussines-errors';

@Injectable()
export class EvaluacionService {
    constructor(
        @InjectRepository(EvaluacionEntity)
        private readonly evaluacionRepository: Repository<EvaluacionEntity>,
    ) {}

    async crearEvaluacion(evaluacion: EvaluacionEntity): Promise<EvaluacionEntity> {
        if (evaluacion.profesor?.id === evaluacion.proyecto?.mentor?.id) {
            throw new BussinesLogicException('El evaluador no puede ser el mismo que el mentor del proyecto', BussinesError.PRECONDITION_FAILED);
        }
        if (typeof evaluacion.proyecto?.notaFinal !== 'undefined') {
            const notaFinal = evaluacion.proyecto.notaFinal;
            if (notaFinal < 0 || notaFinal > 5) {
                throw new BussinesLogicException('La nota final del proyecto debe estar entre 0 y 5', BussinesError.PRECONDITION_FAILED);
            }
        }
        return this.evaluacionRepository.save(evaluacion);
    }
    
    
}
