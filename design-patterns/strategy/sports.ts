import { FavoriteWorkout } from './contracts';

export class Running implements FavoriteWorkout {
    public begin(): void {
        console.log('Go running on the park.');
    }
}

export class Soccer implements FavoriteWorkout {
    public begin(): void {
        console.log('Play soccer with his friends.');
    }
}

export class Gym implements FavoriteWorkout {
    public begin(): void {
        console.log('Go to the gym.');
    }
}

export class VolleyBall implements FavoriteWorkout {
    public begin(): void {
        console.log('Play volleyball with his friends');
    }
}