import {Entity, Column} from "typeorm"
import { BaseEntity } from '../../config/base.entity';

@Entity('users')
export class UserEntity extends BaseEntity{

    @Column()
    username: string;

    @Column()
    name!: string;

    @Column()
    lastname!: string;

    @Column({nullable:true})
    jobPosition?: string;

    @Column()
    numberPhone!:number;

}