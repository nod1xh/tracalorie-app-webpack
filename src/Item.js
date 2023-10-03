class Meal {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2); // Creating a random ID
    this.name = name;
    this.calories = calories;
  }
}
// When calling 'addWorkout' we call this object
class Workout {
  constructor(name, calories) {
    this.id = Math.random().toString(16).slice(2); // Creating a random ID
    this.name = name;
    this.calories = calories;
  }
}

export { Meal, Workout };
