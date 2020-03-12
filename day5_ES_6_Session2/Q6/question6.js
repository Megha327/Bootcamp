import { getUnique } from './filter.js';

export const uniqueLog = () => {
    console.log(`Question6: ${getUnique([1, 2, 3, 4, 5, 1, 2, 3, 4])}`);
}