import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { Course } from './course.interface';
import { CourseService } from './course.service';
// import { CourseOrmService as CourseService} from './course-orm.service';

@Controller('course')
export class CourseController {

    constructor(private readonly courseService: CourseService){
    this.courseService = courseService;
    };

    @Get()
    async getCourses(): Promise<Course[]>{
        const list: Array<Course> = await this.courseService.get();
        return list
    }

    @Get(':id')
    async getCoursesById(@Param('id') id: string): Promise<Course>{
        return await this.courseService.getById(Number(id));
    }

    @Post()
    async create(@Body() course: Course){
        return  await this.courseService.create(course);
    }

    @Delete()
    async delete(@Query('id') id){
        return  await this.courseService.delete(Number(id));
    }
}
