import { Pipe, PipeTransform} from '@angular/core';
import { Log } from './log.model';

@Pipe({
    name: "healthy",
    pure: false
})

export class CaloriesPipe implements PipeTransform {

    transform(input: Log[], filteredList) {
        var output: Log[] = [];
        if (filteredList === 'highCalorieMeal') {
            for (var i = 0; i < input.length; i++) {
                if (input[i].lowCalorie === false) {
                    output.push(input[i]);
                }
            }
            return output;
        } else if (filteredList === 'lowCalorieMeal') {
            for (var i = 0; i < input.length; i++) {
                if (input[i].lowCalorie === true) {
                    output.push(input[i]);
                }
            }
            return output;
        } else {
            return input;
        }
    }
}
