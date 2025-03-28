import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { PetRole } from "./petRole";


@Entity("pets")
export class Pet {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    dono: string;

    @Column()
    telefone: string;

    @Column({
        type: 'text',
        default: PetRole.CACHORRO, 
      })
      animal: PetRole;

    @Column()
    raca: string;

    
    @Column()
    dateOfBirth: string;
}
