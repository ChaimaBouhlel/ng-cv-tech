import { Pipe, PipeTransform } from '@angular/core';
import {ConstantsConfig} from "../../../config/constants.config";

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    return path.trim()? path : ConstantsConfig.defaultImage;
  }

}
