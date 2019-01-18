import { FavoriteWorkout } from './contracts';

export class Person {
    public name: string;
    public favoriteWorkout: FavoriteWorkout;

    constructor(name: string, favoriteWorkout: FavoriteWorkout) {
        this.name = name;
        this.favoriteWorkout = favoriteWorkout;
    }

    workout(): void {
        console.log(`${ this.name } decided to: `);
        this.favoriteWorkout.begin();
    }
}