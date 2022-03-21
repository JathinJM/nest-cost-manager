import { Connection} from 'typeorm';
import { CourseEntity } from './course.entity';

export const courseProviders = [{
  provide: "COURSE_REPOSITORY",
  useFactory: (connection:Connection) =>  connection.getRepository(CourseEntity),
  inject:["DATABASE_CONNECTION"]
}]