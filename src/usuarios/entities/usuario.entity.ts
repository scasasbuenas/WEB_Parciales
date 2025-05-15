import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int' })
  cedula: number;

  @Column()
  nombre: string;

  @Column()
  grupo_investigacion: string;

  @Column({ type: 'int' })
  numero_extension: number;

  @Column({
    type: 'enum',
    enum: ['Profesor', 'Decana'],
  })
  rol: string;

  @ManyToOne(() => Usuario, usuario => usuario.subordinados, { nullable: true })
  jefe: Usuario;

  @OneToMany(() => Usuario, usuario => usuario.jefe)
  subordinados: Usuario[];
} 