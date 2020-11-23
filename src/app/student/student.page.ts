import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student/student.service';

interface Student {
  id:number;
  name:string;
  average:number;
  alternant?:boolean
}

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  public student:Student;
  public id;

  constructor(private route:ActivatedRoute, private studentService:StudentService) {

    this.route.paramMap.subscribe(params => {
      let id = params.get('id')
      //console.log(typeof parseInt(id))
      this.studentService.findById(parseInt(id)).subscribe(data => {
        console.log(data);
        this.student = data;
        console.log(this.student)
      }) 
    })
    console.log(this.student)
    
   }

  ngOnInit() {
    
  }

}
