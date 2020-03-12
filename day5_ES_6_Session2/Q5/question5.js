import { areaCircle, areaRectangle, areaCylinder } from './areaCalculator';

export const areaLog = () => {
    console.log(`Question5: Area of circle with radius 2: ${areaCircle(2)}`);
    console.log(`Area of rectangle with l: 4, w: 3 ${areaRectangle(4, 3)}`);
    console.log(`Area of cylinder with radius 2, height: 5: ${areaCylinder(2, 5)}`);
}