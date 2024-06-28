import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: any 

  showNavigation:any=true;
  showFooter:any=true;
  receiveMessage($event: any){
    
  }
  title = 'ecommerce';

  register= new FormGroup({
    fname:new FormControl("",Validators.required),
    lname: new FormControl("",Validators.required),
    dob: new FormControl("",Validators.required),
    phone: new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.pattern("")),
 
   });
   GetData(){
     console.log(this.register.value)
 
   }
   get vfname(){
     return this.register.get("fname")
   }
   get vlname(){
     return this.register.get("lname")
   }
   get vdob(){
     return this.register.get("dob")
   }
   get vphone(){
     return this.register.get("phone")
   }
   get vemail(){
     return this.register.get("email")
   }
   get vusername(){
     return this.register.get("username")
   }
   get vpassword(){
     return this.register.get("password")
   }
  
  
 
}
