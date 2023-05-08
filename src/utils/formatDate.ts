import { format } from 'date-fns';

import { DATE_FORMATS } from 'constants/global';

type TInputValue = Date | string | number | null;

export function fDate(date: TInputValue, newFormat?: string) {
  const fm = newFormat || DATE_FORMATS.weatherCard;

  return date ? format(new Date(date), fm) : '';
}
