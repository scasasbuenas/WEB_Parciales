import { Test, TestingModule } from '@nestjs/testing';
import { ProfesorService } from './profesor.service';
import { ProfesorEntity } from './profesor.entity/profesor.entity';
import { Repository } from 'typeorm';
import { typeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ProfesorService', () => {
  let service: ProfesorService;
  let repository: Repository<ProfesorEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...typeOrmTestingConfig()],
      providers: [ProfesorService],
    }).compile();

    service = module.get<ProfesorService>(ProfesorService);
    repository = module.get<Repository<ProfesorEntity>>(getRepositoryToken(ProfesorEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Caso positivo
  it('should create a valid profesor (extension de 5 digitos)', async () => {
    const profesor: ProfesorEntity = {
      id: 1,
      cedula: 12345,
      nombre: 'Camilo el Nenas',
      departamento: 'Ingenieria de Sistemas y Computacion',
      extension: 23456,
      esParEvaluador: false,
      evaluaciones: [],
      mentorias: [],
    };
    const result = await service.crearProfesor(profesor);
    expect(result).toMatchObject({extension: 23456});
  });

  // Caso negativo
  it('should throw if extension is not 5 digits', async () => {
    const profesor: ProfesorEntity = {
      id: 1,
      cedula: 12345,
      nombre: 'Camilo el Nenas',
      departamento: 'Ingenieria de Sistemas y Computacion',
      extension: 2345,
      esParEvaluador: false,
      evaluaciones: [],
      mentorias: [],
    };
    await expect(service.crearProfesor(profesor)).rejects.toHaveProperty('message', 'La extensión debe tener 5 dígitos');
  });
});
