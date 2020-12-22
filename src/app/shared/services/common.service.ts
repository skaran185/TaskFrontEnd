import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseuri = "";
  getUri() {
    this.baseuri = "https://localhost:44390/api/";
    return this.baseuri;
  }
  constructor() {
  }
}
