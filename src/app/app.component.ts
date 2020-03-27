import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bootcamp';
  date:Date = new Date();
  titleCaseString:string = "this is a string for a title case";
  reverseString:string = "Bootcamp Training";
  Stringvowel:string="Apple is on table";
  fetchString = [{postId:'' , id:'',name:'', email:'',body:'' }]  ;

  constructor(private http:HttpClient){}
  ngOnInit(){
    this.fetchData();
  }

  private fetchData(){
    this.http
    .get('https://jsonplaceholder.typicode.com/posts/1/comments')
    .pipe(map(responseData => {
      const arr = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key) ){
          arr.push({...responseData[key], id:key });
        }
      }
      return arr;
    }))
    .subscribe(data => {
      // console.log(data);
      this.fetchString = data;
      // console.log(this.fetchString);
    })
  }


}
