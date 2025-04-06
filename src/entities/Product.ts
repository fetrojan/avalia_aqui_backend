import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm"

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type: "varchar", nullable: false})
    name:string

    @Column({type: "decimal", precision: 10, scale: 2, nullable: false})
    price:number

    @Column({type: "varchar", nullable: true})
    brand:string

    @Column({type: "text", nullable: true})
    description:string

    @Column({type: "varchar", nullable: true})
    image:string

    @CreateDateColumn({type: "timestamp"})
    created_at: Date

    @UpdateDateColumn({type: "timestamp"})
    updated_at: Date

}