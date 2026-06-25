import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCardComponent
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})

export class CourseListComponent {

  selectedCourseId:number | null = null;

  courses = [

    {
      id:1,
      name:'Angular Fundamentals',
      code:'ANG101',
      credits:4
    },

    {
      id:2,
      name:'Web Development',
      code:'WEB102',
      credits:3
    },

    {
      id:3,
      name:'TypeScript',
      code:'TS103',
      credits:4
    },

    {
      id:4,
      name:'Database Systems',
      code:'DB104',
      credits:3
    },

    {
      id:5,
      name:'Cloud Computing',
      code:'CC105',
      credits:4
    }

  ];

  onEnroll(courseId:number) {

    console.log(
      'Enrolling in course: ' + courseId
    );

    this.selectedCourseId = courseId;

  }

}
