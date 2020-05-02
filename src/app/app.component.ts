import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpResponse, HttpErrorResponse } from "@angular/common/http";


const BASE_URL = "http://mpopdata.hashchainft.com";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'date-sample1';
  date = new Date("2020/03/01")
  apiDate = null;

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.getDate().subscribe(res => {
      try {
        this.apiDate = new Date((res as any).resourceDate)
      } catch (err) {
        alert("failed to parse response")
      }
    }, error => {
      alert(JSON.stringify("Failed to get Resouce from Api"))
    })
  }

  getDate() {
    return this.httpClient.get(BASE_URL)
  }
}
