import { ProyectoEntity } from "src/proyecto/proyecto.entity/proyecto.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class EstudianteEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'int'})
    cedula: number;

    @Column()
    nombre: string;

    @Column({type: 'int'})
    semestre: number;

    @Column({type: 'varchar'})
    programa: string;
    
    @Column({type: 'int'})
    promedio: number;

    @OneToMany(() => ProyectoEntity, proyecto => proyecto.lider)
    proyectos: ProyectoEntity[];
}
