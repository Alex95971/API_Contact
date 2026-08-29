import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ContactEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({length: 30})
    lastname!: string;

    @Column({length: 30})
    firstname!: string;

    @Column({length: 250})
    email!: string;

    @Column({ type: 'varchar', length: 10})
    phone! : number;
}
