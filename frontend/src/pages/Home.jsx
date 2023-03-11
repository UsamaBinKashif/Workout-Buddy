import { useEffect, useState } from "react";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const getWorkouts = async () => {
      const response = await fetch("http://localhost:8080/api/workout/");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };
    getWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => <h1 key={workout._id}>{workout.title}</h1>)}
      </div>
    </div>
  );
};

export default Home;
