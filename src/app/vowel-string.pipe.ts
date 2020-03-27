import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vowelString'
})
export class VowelStringPipe implements PipeTransform {

  transform(value:string, arr, vowel:object){
    arr = Array.from(value.toLowerCase());
    for(let i=0; i < arr.length; i++){
      if (arr[i] in vowel) {
        //console.log("Aaya - " + strArr[i]);
        vowel[arr[i]] += 1;
      }
    }
    return vowel;
  }

}
