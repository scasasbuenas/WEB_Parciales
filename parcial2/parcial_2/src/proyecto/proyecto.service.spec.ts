import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { typeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { ProyectoService } from './proyecto.service';
import { ProyectoEntity } from './proyecto.entity/proyecto.entity';
import { Repository } from 'typeorm';

describe('ProyectoService', () => {
  let service: ProyectoService;
  let repository: Repository<ProyectoEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...typeOrmTestingConfig()],
      providers: [
        ProyectoService,
        {
          provide: getRepositoryToken(ProyectoEntity),
          useValue: {
            save: jest.fn().mockImplementation((proyecto) => Promise.resolve(proyecto)),
            findOne: jest.fn(),
            find: jest.fn(),
            create: jest.fn(),
          }
        }
      ],
    }).compile();

    service = module.get<ProyectoService>(ProyectoService);
    repository = module.get<Repository<ProyectoEntity>>(getRepositoryToken(ProyectoEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Caso positivo
  it('should create a valid project (presupuesto positivo y titulo > 15 caracteres)', async () => {
    const proyecto: ProyectoEntity = {
      id: 1,
      titulo: 'Como hacer un parcial más justo para el curso de programación web',
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

    const result = await service.crearProyecto(proyecto);
    expect(result).toMatchObject({presupuesto: 1000000, titulo: 'Como hacer un parcial más justo para el curso de programación web'});
  });

  // Caso negativo
  it('should throw if project title is less than 15 characters', async () => {
    const proyecto: ProyectoEntity = {
      id: 1,
      titulo: 'Parcial',
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

    await expect(service.crearProyecto(proyecto)).rejects.toHaveProperty('message', 'El título debe tener más de 15 caracteres');
  });
});
