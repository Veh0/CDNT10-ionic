import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student/student.service';

interface Student {
  id:number;
  name:string;
  average:number;
  alternant?:boolean
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private students:Student[];
  message:string = "";
  rawHTML:boolean = false;
  pageTitle:string = "DEMO";


  constructor(private router:Router, private studentService:StudentService) {
    this.studentService.findAll().subscribe(data => {
      console.log(data);
      this.students = data;
      this.countAlternant();
    }) 
    
  }

  onClick(id:number) {
    this.router.navigate(['/student/'+id]);
  }

  onChange(id:number) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == id) this.students[i].alternant = !this.students[i].alternant;
    }
    this.countAlternant();
  }

  countAlternant() {
    let numAlternant = 0;
    this.students.forEach(student => {
      if(student.alternant) numAlternant++;
    })
    this.message = "Il y a "+numAlternant+" en alternance";
  }

}
