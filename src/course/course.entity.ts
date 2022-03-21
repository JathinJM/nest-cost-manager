import { Entity,  Column, PrimaryGeneratedColumn} from "typeorm";
import { Course } from "./course.interface"

@Entity()
export class CourseEntity implements Course{

    @PrimaryGeneratedColumn() 
    id: number;

    @Column() 
    title: string;

    @Column('text') 
    description: string;

    @Column() 
    author: string;

    @Column() 
    url: string;
}