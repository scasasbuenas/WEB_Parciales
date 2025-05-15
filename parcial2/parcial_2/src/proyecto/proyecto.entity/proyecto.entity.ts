import { EstudianteEntity } from '../../estudiante/estudiante.entity/estudiante.entity';
import { ProfesorEntity } from '../../profesor/profesor.entity/profesor.entity';
import { EvaluacionEntity } from '../../evaluacion/evaluacion.entity/evaluacion.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class ProyectoEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  titulo: string;

  @Column()
  area: string;

  @Column({ type: 'int' })
  presupuesto: number;

  @Column({ type: 'int' })
  notaFinal: number;

  @Column({ type: 'int' })
  estado: number;

  @Column()
  fechaInicio: string;

  @Column()
  fechaFin: string;

  @ManyToOne(() => EstudianteEntity, estudiante => estudiante.proyectos)
  lider: EstudianteEntity;

  @ManyToOne(() => ProfesorEntity, profesor => profesor.mentorias)
  mentor: ProfesorEntity;

  @OneToMany(() => EvaluacionEntity, evaluacion => evaluacion.proyecto)
  evaluaciones: EvaluacionEntity[];
}
