import { Test, TestingModule } from '@nestjs/testing';
import { EvaluacionService } from './evaluacion.service';
import { EvaluacionEntity } from './evaluacion.entity/evaluacion.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('EvaluacionService', () => {
  let service: EvaluacionService;
  let repository: Repository<EvaluacionEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EvaluacionService,
        // Usé mock para evitar que se guarde en la base de datos pq uno de los tests fallaba al intentar guardar la info.
        {
          provide: getRepositoryToken(EvaluacionEntity),
          useValue: {
            save: jest.fn(),
            findOne: jest.fn(),
            find: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<EvaluacionService>(EvaluacionService);
    repository = module.get<Repository<EvaluacionEntity>>(getRepositoryToken(EvaluacionEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Caso positivo
  it('should create a valid evaluation', async () => {
    const evaluacion: EvaluacionEntity = {
      id: 1,
      profesor: {
        id: 1,
        cedula: 12345,
        nombre: 'Camilo el Nenas',
        departamento: 'Ingenieria de Sistemas y Computacion',
        extension: 23456,
        esParEvaluador: false,
        evaluaciones: [],
        mentorias: [],
      },
      proyecto: {
        id: 1,
        titulo: 'Proyecto 1',
        area: 'Ingenieria de Sistemas',
        presupuesto: 1000000,
        notaFinal: 4.5,
        estado: 1,
        fechaInicio: '15/05/2025',
        fechaFin: '15/06/2025',
        lider: {
          id: 1,
          cedula: 12345,
          nombre: 'Juan Perez',
          semestre: 5,
          programa: 'Ingenieria de Sistemas y Computacion',
          promedio: 3.8,
          proyectos: [],
        },
        mentor: {
          id: 2,
          cedula: 12345,
          nombre: 'Jose Bocanegrillas',
          departamento: 'Ingenieria de Sistemas y Computacion',
          extension: 23456,
          esParEvaluador: false,
          evaluaciones: [],
          mentorias: [],
        },
        evaluaciones: [],
      }
    };

    jest.spyOn(repository, 'save').mockResolvedValue(evaluacion);
    const result = await service.crearEvaluacion(evaluacion);
    expect(result).toMatchObject({profesor: {id: 1}, proyecto:{mentor:{id:2}, notaFinal: 4.5}});
  });

  // Caso negativo
  it('should throw if evaluator is mentor', async () => {
    const evaluacion: EvaluacionEntity = {
      id: 1,
      profesor: {
        id: 1,
        cedula: 12345,
        nombre: 'Camilo el Nenas',
        departamento: 'Ingenieria de Sistemas y Computacion',
        extension: 23456,
        esParEvaluador: false,
        evaluaciones: [],
        mentorias: [],
      },
      proyecto: {
        id: 1,
        titulo: 'Proyecto 1',
        area: 'Ingenieria de Sistemas',
        presupuesto: 1000000,
        notaFinal: 7,
        estado: 1,
        fechaInicio: '15/05/2025',
        fechaFin: '15/06/2025',
        lider: {
          id: 1,
          cedula: 12345,
          nombre: 'Juan Perez',
          semestre: 5,
          programa: 'Ingenieria de Sistemas y Computacion',
          promedio: 3.8,
          proyectos: [],
        },
        mentor: {
          id: 1,
          cedula: 12345,
          nombre: 'Camilo el Nenas',
          departamento: 'Ingenieria de Sistemas y Computacion',
          extension: 23456,
          esParEvaluador: false,
          evaluaciones: [],
          mentorias: [],
        },
        evaluaciones: [],
      }
    };

    await expect(service.crearEvaluacion(evaluacion)).rejects.toHaveProperty('message', 'El evaluador no puede ser el mismo que el mentor del proyecto');
  });
});
