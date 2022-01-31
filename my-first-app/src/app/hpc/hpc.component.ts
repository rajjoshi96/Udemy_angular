import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hpc',
  templateUrl: './hpc.component.html',
  styleUrls: ['./hpc.component.css']
})
export class HPCComponent implements OnInit {
  posts:any[]=[];
  constructor(private http:HttpClient) { }


  load_data(){
    this.http
      .get("https://aninditabasu.github.io/indica/html/rv.html")
      .subscribe((posts:any) => {
        // this.posts=posts;
        alert(JSON.stringify(posts));
      });

  }
  ngOnInit(): void {
  }

}
