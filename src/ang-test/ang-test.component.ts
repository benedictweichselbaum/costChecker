import { Component, OnInit } from '@angular/core';
import {cssScannerError} from 'codelyzer/angular/styles/cssLexer';

@Component({
  selector: 'app-ang-test',
  templateUrl: './ang-test.component.html',
  styleUrls: ['./ang-test.component.css']
})
export class AngTestComponent implements OnInit {

  cssSelector: string;
  text: string;

  constructor() { }

  ngOnInit() {

    this.cssSelector = 'errorTest';
    this.text ='Ein Fehler';
  }

  changeStyle() {
    if(this.cssSelector === 'errorTest'){
      this.cssSelector = 'warningTest';
      this.text='Warnung';
    }else{
      this.cssSelector = 'errorTest';
      this.text ='Ein Fehler';
    }
  }



}
