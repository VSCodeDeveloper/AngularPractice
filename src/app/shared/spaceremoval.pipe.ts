import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceremovalpipe',
})
export class SpaceRemovalPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return value.toString().replaceAll(args.toString(), ' ');
  }
}
