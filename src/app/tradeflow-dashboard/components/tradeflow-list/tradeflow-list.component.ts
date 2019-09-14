import { Component, OnInit } from '@angular/core';

import { Tradeflow } from '../../models/tradeflow.interface';
import {DataService} from '../../../data.service';
@Component({
  selector: 'tradeflow-list',
  templateUrl: './tradeflow-list.component.html',
  styleUrls: ['./tradeflow-list.component.scss']
})
export class TradeflowListComponent implements OnInit {

  tradeflows : Tradeflow[];
  departureDate : String = null;
  arrivalDate : String = null;
  constructor( private data : DataService) {
  }

  ngOnInit(){
    this.tradeflows = this.data.getTradeflows();
  }

  getTradeflows(): Tradeflow[] {
    return this.tradeflows;
  }
  searchChange(event : any){
    if(event.target.name == "departure_date"){
      this.departureDate = event.target.value;
      this.tradeflows = this.data.searchTradeflow(this.arrivalDate,this.departureDate);
    } else if(event.target.name == "arrival_date"){
      this.arrivalDate = event.target.value;
      this.tradeflows = this.data.searchTradeflow(this.arrivalDate,this.departureDate);
    }
  }
}
