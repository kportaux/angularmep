import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtertab'
})
export class FiltertabPipe implements PipeTransform {

  transform(array, keyfilter, valuefilter): any {
    if (array === undefined || array == null) {
      return;
    }
    return array.filter(
      (element) =>
        element[keyfilter] === valuefilter
    );
  }

}
