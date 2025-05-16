import { Test, TestingModule } from '@nestjs/testing';
import { EstudianteService } from './estudiante.service';
import { EstudianteEntity } from './estudiante.entity/estudiante.entity';
import { Repository } from 'typeorm';
import { typeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { getRepositoryToken } from '@nestjs/typeorm';


describe('EstudianteService', () => {
  let service: EstudianteService;
  let repository: Repository<EstudianteEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...typeOrmTestingConfig()],
      providers: [EstudianteService],
    }).compile();
    
    service = module.get<EstudianteService>(EstudianteService);
    repository = module.get<Repository<EstudianteEntity>>(getRepositoryToken(EstudianteEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Caso positivo
  it('should create a student with valid promedio and semestre', async () => {
    const estudiante: EstudianteEntity = {
      id: 1,
      cedula: 12345,
      nombre: 'Juan Perez',
      semestre: 5,
      programa: 'Ingeniería',
      promedio: 4.0,
      proyectos: []
    };
    const result = await service.crearEstudiante(estudiante);
    expect(result).toMatchObject({ nombre: 'Juan Perez', promedio: 4.0, semestre: 5 });
  });

  // Caso negativo
  it('should throw exception if promedio or semestre are invalid', async () => {
    const estudiante: EstudianteEntity = {
      id: 2,
      cedula: 12345,
      nombre: 'Ana Ruiz',
      semestre: 2,
      programa: 'Matemáticas',
      promedio: 3.0,
      proyectos: []
    };
    await expect(service.crearEstudiante(estudiante)).rejects.toHaveProperty('message', 'El promedio debe ser mayor a 3.2 y el semestre mayor o igual a 4');
  });
});
