import { ProyectoEntity } from 'src/proyecto/proyecto.entity/proyecto.entity';
import { EvaluacionEntity } from 'src/evaluacion/evaluacion.entity/evaluacion.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class ProfesorEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int' })
  cedula: number;

  @Column()
  nombre: string;

  @Column()
  departamento: string;

  @Column({ type: 'int' })
  extension: number;

  @Column({ type: 'boolean' })
  esParEvaluador: boolean;

  @OneToMany(() => EvaluacionEntity, (evaluacion) => evaluacion.profesor)
  evaluaciones: EvaluacionEntity[];

  @OneToMany(() => ProyectoEntity, proyecto => proyecto.mentor)
  mentorias: ProyectoEntity[];
}
