import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  winMessage: string = '';
  isCross = false;
  itemArray: string[] = new Array(9).fill('empty');
  put:string[]=[];

  handleClick = (itemNumber: number) => {
    if(this.winMessage){
      return alert(this.winMessage);
    }
    else if(this.itemArray[itemNumber]==='empty'){
      this.itemArray[itemNumber] = this.isCross ? 'circle':'cross';
      this.isCross = !this.isCross;
    }
    else{
      return alert('Already filled');
    }
    this.checkIsWinner();
    this.whatToPut(itemNumber);
  }

  whatToPut = (itemNumber:number) => {
    if(this.isCross) this.put[itemNumber]='X';
    else this.put[itemNumber]='0';
  }

  checkIsWinner = () => {
    if(
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    }
    if(
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[3] === this.itemArray[5] &&
      this.itemArray[3] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[3]} won`;
    }
    if(
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[6] === this.itemArray[8] &&
      this.itemArray[6] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[6]} won`;
    }
    if(
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[0] === this.itemArray[8] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    }
    if(
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[2] === this.itemArray[6] &&
      this.itemArray[2] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
    }
    if(
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[0] === this.itemArray[6] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    }
    if(
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[1] === this.itemArray[7] &&
      this.itemArray[1] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[1]} won`;
    }
    if(
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[2] === this.itemArray[8] &&
      this.itemArray[2] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
    }
  }

  reloadGame = () => {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty');
  }

}
