# Creating Controllers

Create a "controllers" directory and a file `workoutController.js`.

We can properly organize files this way.

## Controller structure

We create function for each process (CRUD).

Example:

- getAllWorkouts

- getWorkoutById

- createWorkout

- deleteWorkoutById

- updateWorkoutByI

`id` parameters can be retrieved using `request.params`.

We can validate id parameters using `mongoose.Types.ObjectId.isValid(id)`.

Make sure to use `async` and `await` when retrieving from mongoDB.

We can use pre-made functions from `models`

Example:

```bash
const updateWorkoutById = async (request, response) => {
    const { id } = request.params;                           

    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(404).json({ error: "No such workout!" });
    } else {
        try {

            const workout = await workoutModel.findOneAndUpdate(
                { _id: id },
                { ...request.body },
                { new: true }
            );

            if (!workout) {
                response.status(400).json({ error: "No such workout!" });
            } else {
                response.status(200).json(workout);
            }
        } catch (error) {
            response.status(400).json({ error: error.message });
        }
    }
}
```

These functions are imported to `workoutRouter.js` and used in this way:

```bash
// Get all workouts
router.get('/', getAllWorkouts);

// Get single workouts
router.get('/:id', getWorkoutById);

// Post single workouts
router.post('/', createWorkout);

// Delete single workouts
router.delete('/:id', deleteWorkoutById);

// Update single workouts
router.patch('/:id', updateWorkoutById);
```


# Important!!

To get `request.body` values you need to set this as middleware in `server.js`:

`app.use(express.json());`