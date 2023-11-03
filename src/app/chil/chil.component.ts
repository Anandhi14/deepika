import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chil',
  templateUrl: './chil.component.html',
  styleUrls: ['./chil.component.css']
})
export class ChilComponent {
@Input() data:string = "";
@Output() sendData:EventEmitter<any> = new EventEmitter<any>();
onClick(){
  this.sendData.emit("Data Transfer");
}
}
