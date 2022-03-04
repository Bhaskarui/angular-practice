import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiitersPipe implements PipeTransform {

  transform(value:any[], filterString:string, propertyName:string):any[] {
    const result:any= [];
    if(!value || filterString=='' || propertyName == ''){
      return value;
    }
    value.forEach((res:any)=>{
      if(res[propertyName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(res)
      }
    })
    return result;
  }

}
