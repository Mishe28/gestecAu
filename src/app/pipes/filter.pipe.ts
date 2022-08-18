import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any[]): unknown {
    const resultadoBuscar = [];
    for (const classroom of value) {
      if (classroom.name.indexOf(arg) > -1) {
        resultadoBuscar.push(classroom);
      }
    }
    return resultadoBuscar
  }
}
