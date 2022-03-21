import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
// import { CourseOrmService } from './course-orm.service';
// import { DatabaseModule } from '../database/database.module';
// import { courseProviders } from './course.provider';

// @Module({
//   imports: [DatabaseModule],
//   controllers: [CourseController],
//   providers: [...courseProviders,
//     CourseService, CourseOrmService]
// })

@Module({
  imports: [],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}
