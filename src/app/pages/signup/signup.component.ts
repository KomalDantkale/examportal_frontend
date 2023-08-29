import { Component,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
     constructor(private userService:UserService,private snack:MatSnackBar){}

     public user={
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
     };

     ngOnInit(): void{}

     formSubmit(){
       console.log(this.user);
       if (this.user.username == '' || this.user.username == null) {
        //alert('User is required !!');
        this.snack.open('UserName is required!!','ok');
        
        return;
      }
      else if (this.user.password == '' || this.user.password == null) {
        //alert('User is required !!');
        this.snack.open('Password is required!!','ok');
        return;
      }
      else if (this.user.firstName == '' || this.user.firstName == null) {
        //alert('User is required !!');
        this.snack.open('first Name is required!!','ok');
        return;
      }
      else if (this.user.lastName == '' || this.user.lastName == null) {
        //alert('User is required !!');
        this.snack.open('last Name is required!!','ok');
        return;
      }
      else if (this.user.email == '' || this.user.email == null) {
        //alert('User is required !!');
        this.snack.open('email is required!!','ok');
        return;
      }
      else if (this.user.phone == '' || this.user.phone == null) {
        //alert('User is required !!');
        this.snack.open('phone number is required!!','ok');
        return;
      }

      //addUser: userservice
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        //success
        console.log(data);
        Swal.fire('Success done!!','User id is' + data.id, 'success');
     },
     (error)=>{
      //error
      console.log(error);
      alert('something went wrong');
     }
     
    );

}
}
