import React from "react";
import PropTypes from "prop-types"; 

function NewFoodForm (props) {

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
  

  return (   
    <header className="header">
      <form onSubmit={handleNewFoodFormSubmission}>
        <input type='text' name='name' placeholder='Morning Shake' />
        <input type='number' name='calories' placeholder='0' />
        <input type='number' name='protein' placeholder='0' />
        <input type='number' name='fat' placeholder='0' />
        <input type='number' name='carbs' placeholder='0' />

        <button type='submit'>Help!</button>
      </form>
    </header>
  );
}

NewFoodForm.propTypes = {
  onNewFoodCreation: PropTypes.func
};

export default NewFoodForm;