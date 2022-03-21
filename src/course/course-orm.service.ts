import { HttpException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CourseEntity } from './course.entity';
import { Course } from './course.interface';

@Injectable()
export class CourseOrmService {

    constructor(
        @Inject("COURSE_REPOSITORY")
        private repository: Repository<CourseEntity>
    ){

    }
    async get(): Promise<Array<Course>>{
        const courses = this.repository.find();
        return new Promise(resolve => resolve(courses));
    };

    async create(course: Course): Promise<Course>{
        return new Promise(resolve => {
            this.repository.create(course);
            resolve(course)
        });
    };

    async getById(id: number): Promise<Course>{
        return new Promise(resolve => {
            const course = this.repository.findOne( { where:
                { id: id }
            });
            if (!course) {
                throw new HttpException('Course does not exist', 404)
            }
            resolve(course)
        });
    };

    async delete(id: number): Promise<number>{
        return new Promise(resolve => {
            const course = this.repository.findOne( { where:
                { id: id }
            });
            if(!course) throw new HttpException('course does not exist', 404);
             this.repository.delete(course as any);
            resolve(id)
        });
    };

}
