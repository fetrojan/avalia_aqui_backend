import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm"

@Entity("reviews")
export class Review {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type: "int", nullable: false})
    product_id:number

    @Column({type: "varchar", nullable: false})
    name:string

    @Column({type: "varchar", nullable: false})
    email:string

    @Column({type: "text", nullable: false})
    feedback:string

    @Column({type: "varchar", nullable: false})
    experience:string

    @Column({type: "boolean", nullable: false})
    recommend:boolean

    @CreateDateColumn({type: "timestamp"})
    created_at: Date

    @UpdateDateColumn({type: "timestamp"})
    updated_at: Date

}