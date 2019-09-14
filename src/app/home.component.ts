import { Component } from '@angular/core';
import {DataService} from './data.service';
interface LabeledValue {
    label: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {



  constructor(private data : DataService){

  }

}
