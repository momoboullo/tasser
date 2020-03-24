import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
      <>
        <Navbar />
          <Switch>
                <Route path="/" exact component={ExercisesList} />
                <Route path="/edit/:id" exact component={EditExercise} />
                <Route path="/create" exact component={CreateExercise} />
                <Route path="/user" exact component={CreateUser} />
          </Switch>
      </>
  );
}

export default App;
