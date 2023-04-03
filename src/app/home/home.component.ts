import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup;
  listdata:any;

  constructor(private fb:FormBuilder){
    this.listdata = [];
    this.userForm = this.fb.group({
      firstname: new FormControl('',[Validators.required]),
      emailid: new FormControl('',[Validators.required]),
      phonenum: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required])

    })
  }
  get firstname(){
    return this.userForm.get('firstname');
  }
  get emailid(){
    return this.userForm.get('emailid');
  }
  get phonenum(){
    return this.userForm.get('phonenum');
  }
  get dob(){
    return this.userForm.get('dob');
  }
  get gender(){
    return this.userForm.get('gender');
  }
  get address(){
    return this.userForm.get('address');
  }
  Onsubmit(){
      alert("Form Submitted Sucessfully")
    }
    ngOnInit() {
    }
}
  
