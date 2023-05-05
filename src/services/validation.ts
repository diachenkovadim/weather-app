import * as Yup from 'yup';

import { CITY_NAME_REGEX } from 'constants/regex';

const cityNameValidationRules = Yup.string()
  .required('City name is required')
  .matches(
    CITY_NAME_REGEX,
    'City name must only contain letters, spaces, or hyphens'
  );

export const cityNameValidationSchema = Yup.object().shape({
  cityName: cityNameValidationRules,
});
