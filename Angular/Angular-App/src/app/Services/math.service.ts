import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  timer: any;
  constructor() {}
  math(start: number, limit: number): Observable<string> {
    return new Observable<string>((Observable) => {
      let i = 0;
      let string = '';
      this.timer = setInterval(() => {
        if (i <= limit) {
          string = `${start} * ${i} =${start * i}`;
          Observable.next(string);
          i++;
        }
      }, 1000);
    });
  }
  Unsubscription() {
    clearInterval(this.timer);
  }
}
