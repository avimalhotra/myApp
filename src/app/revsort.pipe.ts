import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revsort',
  // pure:true,
  // standalone:true
})

export class RevsortPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(x:string):string{
      return x.split("").reverse().join("");
  }


}
