import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MobilePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const mobile: string = value.mobile;
    const regex = /^01[0-2|5]{1}[0-9]{8}$/;

    if (!mobile) {
      throw new BadRequestException('Mobile number is required');
    }

    if (mobile.length !== 11) {
      throw new BadRequestException('Mobile number must be 11 digits');
    } else if (mobile.startsWith('0912')) {
      value.mobile = '0999999' + mobile.slice(3);
    } else if (mobile.startsWith('0921')) {
      value.mobile = '0921' + mobile.slice(4);
    } else if (mobile.startsWith('093')) {
      value.mobile = '0931' + mobile.slice(4);
    } else if (mobile.startsWith('0941')) {
      value.mobile = '0941' + mobile.slice(4);
    }

    console.log(value);

    return value;
  }
}
