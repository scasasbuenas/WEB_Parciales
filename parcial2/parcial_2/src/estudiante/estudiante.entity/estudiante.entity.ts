import { ProyectoEntity } from "../../proyecto/proyecto.entity/proyecto.entity";
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

    @Column()
    programa: string;
    
    @Column({type: 'float'})
    promedio: number;

    @OneToMany(() => ProyectoEntity, proyecto => proyecto.lider)
    proyectos: ProyectoEntity[];
}
