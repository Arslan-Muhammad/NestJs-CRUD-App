import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}
  create(createStudentDto: CreateStudentDto): Promise<Student> {
    const user: Student = new Student();
    user.firstName = createStudentDto.firstName;
    user.lastName = createStudentDto.lastName;
    user.age = createStudentDto.age;
    return this.studentRepository.save(user);
  }

  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  findOne(id: string) {
    return this.studentRepository.findOneById(id);
  }

  update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const user: Student = new Student();
    user.firstName = updateStudentDto.firstName;
    user.lastName = updateStudentDto.lastName;
    user.age = updateStudentDto.age;
    user.id = id;
    return this.studentRepository.save(user);
  }

  remove(id: number) {
    this.studentRepository.delete(id);
    return `User with Id:${id} is deleted succesfully!`;
  }
}
