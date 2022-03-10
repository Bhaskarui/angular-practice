import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[], filterString:string, propertyName:string){
  //   const result:any= [];
  //   if(!value || filterString=='' || propertyName == ''){
  //     return value;
  //   }
  //   value.forEach((res:any)=>{
  //     if(res[propertyName].trim().toLowerCase().includes(filterString.toLowerCase())){
  //       result.push(res)
  //     }
  //   })
  //   return result;
  }

}
