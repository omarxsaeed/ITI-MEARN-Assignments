import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(unfilteredArray: any[], target: any): any[] {
    let filteredArray: any[] = unfilteredArray.filter((elem) => {
      elem === target;
    });
    return filteredArray;
  }
}
