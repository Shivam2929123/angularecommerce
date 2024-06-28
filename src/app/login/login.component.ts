import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  register= new FormGroup({
   
   fname:new FormControl("",Validators.required),
   lname: new FormControl("",Validators.required),
   dob: new FormControl("",Validators.required),
   phone: new FormControl("",Validators.required),
   email:new FormControl("",Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")),
   username:new FormControl("",Validators.required),
   password:new FormControl("",Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$")),
 

  });
  GetData(){
    console.log(this.register.value)
    
  }
 
  

  submit(login: any)
  {
    console.log("form submitted",login)
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
  



    





