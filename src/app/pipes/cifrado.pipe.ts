import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cifrado'
})
export class CifradoPipe implements PipeTransform {

  transform(value: string, sw:boolean=false): string {
    // if (sw) {
    //   let cnt = value.length;
    //   let nombre = value;
    //   let asterisco = '';
    //   for (let i = 0; i < cnt; i++) {
    //     asterisco +='*';
    //   }
    //   return asterisco;
    // } else {
    //   return value;
    // }
    return (sw)?'*'.repeat(value.length):value;
    
  }

}
