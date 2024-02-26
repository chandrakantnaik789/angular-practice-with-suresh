import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAlert(){
    alert('some alert for user');
  }

  showDeletionAlert(){
    if(confirm('some alert for user before deletion')){
      alert('Item has been deleted');
    }
  }

  arr:Array<string> = [];
  addItem(){
    const item = prompt("Enter some number");
    if(item){
      this.arr.push(item);
      console.log(this.arr);
    }
  }

  delete(item: string){
    if(confirm('are you sure?')){
      this.arr = this.arr.filter(x=> x != item);
    }
  }

}
