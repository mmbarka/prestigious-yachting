import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { YachtService } from 'src/app/services/yacht.service';

@Component({
  selector: 'app-add-yacht',
  templateUrl: './add-yacht.component.html',
  styleUrls: ['./add-yacht.component.css']
})
export class AddYachtComponent implements OnInit {

  yacht: any={};
  addYachtForm: FormGroup;

  constructor(private formBuilder:FormBuilder,
              private yachtService: YachtService,
              private router:Router) { }

  ngOnInit(){

    this.addYachtForm = this.formBuilder.group({
      name:[''],
      price:[''],
      length:[''],
      guest:[''],
      picture:['']
    });
  }


  addYacht(){
  this.yachtService.sendRequestToAddYacht(this.yacht).subscribe(
    (data) =>{
      console.log(data.message);
      this.router.navigate(['']);
    }
  );
    
  } 


}
