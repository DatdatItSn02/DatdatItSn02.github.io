import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(array: any[], searchInput: string): any[] {
    // Kiểm tra searchInput có giá trị không
    if(!searchInput) return array;
    // Trả về 
    return array.filter((item)=>{
      return item.name.toLowerCase().includes(searchInput.toLowerCase());
    })
  }

}
