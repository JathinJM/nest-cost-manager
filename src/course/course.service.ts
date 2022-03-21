import { HttpException, Injectable } from '@nestjs/common';
import { Course } from './course.interface';
import { courses } from "./store";

@Injectable()
export class CourseService {

    async get(): Promise<Array<Course>>{
        return new Promise(resolve => resolve(courses));
    };

    async create(course: Course): Promise<Course>{
        return new Promise(resolve => {
            courses.push(course);
            resolve(course)
        });
    };

    async getById(id: number): Promise<Course>{
        return new Promise(resolve => {
            const course = courses.find(course => course.id === id);
            if (!course) {
                throw new HttpException('Course does not exist', 404)
            }
            resolve(course)
        });
    };

    async delete(id: number): Promise<number>{
        return new Promise(resolve => {
            const index = courses.findIndex(course => course.id === id);
            if(index === -1) throw new HttpException('course does not exist', 404);
            courses.splice(index, 1);
            resolve(id)
        });
    };

}
