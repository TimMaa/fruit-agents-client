import { get } from 'svelte/store';

import { env } from '../environment.js';
import { errorHandler } from './errorService.js';
import { ratings } from '../store.js';

// TODO: Replace Date with moment
const addRating = (id, rating) => {
  if(get(ratings).find(rating => rating.id === id)) return errorHandler(new Error('Already rated.'));
  // fetch(`${env}/agents/${id}/rate`, {
  //   method: 'POST',
  //   body: JSON.stringify({ rating })
  // })
  //   .then(res => res.json())
  //   .then(() => {
      // const threeWeeksInMS = 1814400000;
      // const now = new Date();
      const newRatings = [
        ...get(ratings),
        // ...get(ratings).filter(rating => now - new Date(rating.date) < threeWeeksInMS),
        { id, date: new Date(), rating }
      ];
      window.localStorage.setItem('ratings', JSON.stringify(newRatings))
      ratings.set(newRatings);
    // })
    // .catch(errorHandler);
}

export default {
  addRating
}