import { Component, OnInit } from '@angular/core';
import { YachtService } from 'src/app/services/yacht.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  yachts: any = [];
  constructor(private yachtService:YachtService) { }

  ngOnInit() {

    this.yachtService.sendRequestToGetAllYachts().subscribe(
      (data) =>{       
        this.yachts = data.yachts;
      }
    )
  
  }

}
