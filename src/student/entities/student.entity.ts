import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  age: Number;
}
