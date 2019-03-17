import { Component, OnInit } from '@angular/core';
import {CostPosition} from '../model/CostPosition';

@Component({
  selector: 'app-cost-position',
  templateUrl: './cost-position.component.html',
  styleUrls: ['./cost-position.component.css']
})
export class CostPositionComponent implements OnInit {

  positions: CostPosition[] = [];
  deleteID: number;
  statusOpposit: string[] = [];
  pIdCSS: string[] = [];
  emptyState: boolean;
  emptyCounter: number;


  constructor() {
    this.positions = [{price: 250, purpose: 'Versicherung', status: 'richtig'}, {price: 150, purpose: 'Benzin', status: 'Warnung'}, {price: 780, purpose: 'Miete', status: 'Warnung'}, {price: 540, purpose: 'Auto', status: 'Warnung'}];
  }

  ngOnInit() {

    if (this.positions.length > 0) {
      this.emptyState = false;
    } else {
      this.emptyState = true;
    }

    for (let i = 0; i < this.positions.length; i++) {
      if (this.positions[i].status === 'Warnung') {
        this.statusOpposit[i] = 'richtig';
        this.pIdCSS[i] = 'warn';
      } else {
        this.statusOpposit[i] = 'Warnung';
        this.pIdCSS[i] = 'right';
      }
    }
  }

  deletePosition(position: CostPosition) {
    for (let i = 0; i < this.positions.length; i++) {
      if (position === this.positions[i]) {
        this.deleteID = i;
      }
    }
    this.emptyCounter = 0;
    for (let i = 0; i < this.positions.length; i++) {
      if (this.positions[i] != null) {
        console.log(this.positions[i]);
        this.emptyCounter++;
      }
    }
    if (this.emptyCounter === 1) {
      this.emptyState = true;
    }

    delete this.positions[this.deleteID];
  }

  changeStatus(pos: CostPosition) {
      if (pos.status === 'richtig') {
        this.positions[this.positions.indexOf(pos)].status = 'Warnung';
        this.statusOpposit[this.positions.indexOf(pos)] = 'richtig';
        this.pIdCSS[this.positions.indexOf(pos)] = 'warn';
      } else {
        this.positions[this.positions.indexOf(pos)].status = 'richtig';
        this.statusOpposit[this.positions.indexOf(pos)] = 'Warnung';
        this.pIdCSS[this.positions.indexOf(pos)] = 'right';
      }


  }

}
