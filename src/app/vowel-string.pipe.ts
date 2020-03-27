import { Pipe, PipeTransform } from '@angular/core';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Pipe({
  name: 'vowelString'
})
export class VowelStringPipe implements PipeTransform {

  transform(value:string){
    let vowel = {a:0,e:0,i:0,o:0,u:0};
    let arr = Array.from(value.toLowerCase());
    for(let i=0; i < arr.length; i++){
      if (arr[i] in vowel) {
        //console.log("Aaya - " + strArr[i]);
        vowel[arr[i]] += 1;
      }
    }
    return JSON.stringify(vowel);
    //return vowel;
  }

}
