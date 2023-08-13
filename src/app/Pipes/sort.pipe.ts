import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'sort'})
export class SortPipe implements PipeTransform {

    transform(value : Array < any >, sortParams: string[]): any {
        const sortField = sortParams[0];
        const sortDirection = sortParams[1];
        let multiplier=1
        if(sortDirection==='desc'){
            multiplier=-1;
        }
        if (!value) {
            return ;
        }
        // console.log("before sorting", sortField, sortDirection)
        // console.log(value)
        value.sort((a : any, b : any) => {
            if (a[sortField] < b[sortField]) {
                return -1 * multiplier ;
            } else if (a[sortField] > b[sortField]) {
                return 1 * multiplier ;
            } else {
                return 0;
            }
        })
        // console.log("after sorting")
        // console.log(value)
        return value;
    }

}
