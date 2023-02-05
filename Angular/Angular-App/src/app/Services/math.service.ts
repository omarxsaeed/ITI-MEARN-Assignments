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
      let counter = 0;
      let result = '';
      this.timer = setInterval(() => {
        if (counter <= limit) {
          result = `${start} * ${counter} =${start * counter}`;
          Observable.next(result);
          counter++;
        }
      }, 1000);
    });
  }
  Unsubscription() {
    clearInterval(this.timer);
  }
}
