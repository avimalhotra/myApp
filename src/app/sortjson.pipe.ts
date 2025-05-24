import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortjson'
})
export class SortjsonPipe implements PipeTransform {

  transform(array: any[] , order:string, srt: boolean = true ): any[] {
    
    return array.sort((a, b) => {
      const valA = a[order];
      const valB = b[order];

      if (valA < valB) return srt === true ? -1 : 1;
      if (valA > valB) return srt === true ? -1 : 1;

      return 0;
    });
    
  }

}
