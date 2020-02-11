import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname:string;
//bname:string;
//sname:string;
pwd:string;
errmsg:string;
  constructor(private route:Router) { 

  }

  ngOnInit() {
  }
public Validate()
{
  
  //sessionStorage.setItem("un1",this.bname);
  //sessionStorage.setItem("un2",this.sname);
  if(this.uname=="raj" && this.pwd=="12345")
  {
    sessionStorage.setItem("un",this.uname);
   this.route.navigateByUrl('admin');
  }
  else if(this.uname=="sowji" && this.pwd=="12345")
  {
    sessionStorage.setItem("un",this.uname);
    this.route.navigateByUrl('buyer');
  }
  else if(this.uname=="neeru" && this.pwd=="12345")
  {
    sessionStorage.setItem("un",this.uname);        
    this.route.navigateByUrl('seller');
  }
  else 
  {
    this.errmsg="Invalid Login Details";
  }
}
}
