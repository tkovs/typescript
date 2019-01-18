import { Person } from './person';
import * as sports from './sports';

const Josh = new Person('Josh', new sports.Soccer());

Josh.workout();

Josh.setFavoriteWorkout(new sports.Running());
Josh.workout();

Josh.setFavoriteWorkout(new sports.Gym());
Josh.workout();