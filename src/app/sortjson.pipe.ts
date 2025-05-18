import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortjson'
})
export class SortjsonPipe implements PipeTransform {

  transform(array: any[] , order:string ): any[] {
    
    return array.sort((a, b) => {
      const valA = a[order];
      const valB = b[order];

      if (valA < valB) return  -1;
      if (valA > valB) return  1;

      return 0;
    });
    
  }

}
