import {Pipe, PipeTransform} from '@angular/core';
import {Language} from './language.model';

@Pipe({
  name: "type",
  pure: false
})

  export class TypePipe implements PipeTransform {
  transform(input: Language[], languageType) {
    var output: Language[] = [];
    if (languageType === "functionalLanguages") {
      for (var i=0; i < input.length; i++) {
        if (input[i].type === "Functional") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (languageType === "objectOrientedLanguages") {
      for (var i=0; i < input.length; i++) {
        if (input[i].type === "Object Oriented") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
