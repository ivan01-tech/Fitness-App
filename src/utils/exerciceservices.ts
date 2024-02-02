import {
  REACT_APP_RAPID_API_EXERCISES_URI,
  REACT_APP_RAPID_API_KEY,
  REACT_APP_RAPID_API_HOST,
} from '@env';

export const getExercises = async (
  bodyPart: string,
): Promise<BodyPartRes[] | undefined> => {
  const options = {
    method: 'GET',
    url: `${REACT_APP_RAPID_API_EXERCISES_URI}/bodyPart/${bodyPart}`,
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': REACT_APP_RAPID_API_HOST,
    },
  };
  const res = await fetch(options.url, {
    ...options,
  });

  return await res.json();
};
