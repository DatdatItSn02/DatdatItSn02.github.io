import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(array: any, category: string ): any[] {
    // Tạo mảng tạm
    let tmpArray: any[] = [];
    // Kiểm tra category input có chứa "ALl" không
    if(category.indexOf('All') < 0) {
      // Duyệt mảng input
      array.forEach((item:any) => {
        // Thêm item có category giống category input
        if(item.category == category){
          tmpArray.push(item);
        }
      })
    }
    // Khi filter All
    else {
      switch (category) {
        // case AllLeu trả về mảng chỉ chứa sản phẩm lều
        case 'AllLeu':
          array.forEach((item:any) => {
            // Thêm item có category chứa chữ 'Lều'
            if(item.category.indexOf('Lều') >= 0 ){
              tmpArray.push(item);
            }
          })
        break;
        // case AllCombo trả về mảng chỉ chứa sản phẩm combo
        case 'AllCombo':
          array.forEach((item:any) => {
            // Thêm item có category chứa chữ 'Combo'
            if(item.category.indexOf('Combo') >= 0 ){
              tmpArray.push(item);
            }
          })
        break;
      
        default:
          tmpArray = array;
          break;
      }
    }
    // Trả về mảng tạm
    return tmpArray;
  }

}
