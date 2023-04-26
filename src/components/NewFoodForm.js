import React from "react";
import PropTypes from "prop-types";
import { db, auth } from "./../firebase.js";

function NewFoodForm(props) {
  function handleNewFoodFormSubmission(event) {
    event.preventDefault();
    const newFoodData = {
      name: event.target.name.value,
      calories: parseInt(event.target.calories.value),
      protein: parseInt(event.target.protein.value),
      fat: parseInt(event.target.fat.value),
      carbs: parseInt(event.target.carbs.value),
    };
    props.onNewFoodCreation(newFoodData);
  }

  if (auth.currentUser == null) {
    return (
      <React.Fragment>You must be signed in to add new items.</React.Fragment>
    );
  } else if (auth.currentUser != null) {
    return (
      <React.Fragment>
        <span>Add a new item to your pantry:</span>
        <div className="content--newfoodform">
          <div className="container--newfoodform--leftcolumn">
            <div className="container--newfoodform--name">Name:</div>
            <div className="container--newfoodform--input1">Calories:</div>
            <div className="container--newfoodform--input1">Protein:</div>
            <div className="container--newfoodform--input1">Fat:</div>
            <div className="container--newfoodform--input1">Carbs:</div>
          </div>

          <div className="container--newfoodform--rightcolumn">
            <div className="container--newfoodform--input2">
              <form onSubmit={handleNewFoodFormSubmission}>
                <input
                  className="container--newfoodform--inputform-name"
                  type="text"
                  name="name"
                  placeholder="Morning Shake"
                />
                <br />
                <input
                  className="container--newfoodform--inputform"
                  type="number"
                  name="calories"
                  placeholder="0"
                />
                <br />
                <input
                  className="container--newfoodform--inputform"
                  type="number"
                  name="protein"
                  placeholder="0"
                />
                <br />
                <input
                  className="container--newfoodform--inputform"
                  type="number"
                  name="fat"
                  placeholder="0"
                />
                <br />
                <input
                  className="container--newfoodform--inputform"
                  type="number"
                  name="carbs"
                  placeholder="0"
                />
                <button
                  className="container--newfoodform--button"
                  type="submit"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

NewFoodForm.propTypes = {
  onNewFoodCreation: PropTypes.func,
};

export default NewFoodForm;