import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css'],
})
export class ViewQuizzesComponent implements OnInit {
  quizzes = [
    {
      qId:20,
      title:'Basic java Quiz',
      description:'core java is the part of java programming language',
      maxMarks:'50',
      numberOfQuestions:'20',
      active:'',
      category:{
        title:'Programming',
      },
    },
  ];

  constructor(private _quiz: QuizService) {}

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(this.quizzes);
      },
      (error: any) => {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );
  }

  deleteQuiz(qId: any)
  {
    Swal.fire({
      icon:'info',
      title:'Are you sure ?',
      confirmButtonText:'Delete',
      showCancelButton:true,

    }).then((result) => {
      if(result.isConfirmed){
        this._quiz.deleteQuiz(qId).subscribe(
          (data)=>{
            this.quizzes=this.quizzes.filter((quiz)=>quiz.qId!=qId);
          Swal.fire('success','Quiz deleted','success');
         },
        (error)=>{
        Swal.fire('Error','Error in deleting quiz','error');
        
        }
        );
      }
    
    })
        
    }
    

  }
  
  

