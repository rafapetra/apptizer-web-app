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
    <div className="content--newfoodform">
      <form onSubmit={handleNewFoodFormSubmission}>
        Name: <input type='text' name='name' placeholder='Morning Shake' /><br />
        Calories: <input type='number' name='calories' placeholder='0' /><br />
        Protein: <input type='number' name='protein' placeholder='0' /><br />
        Fat: <input type='number' name='fat' placeholder='0' /><br />
        Carbs: <input type='number' name='carbs' placeholder='0' />

        <button type='submit'>Save</button>
      </form>
    </div>
  );
}

NewFoodForm.propTypes = {
  onNewFoodCreation: PropTypes.func
};

export default NewFoodForm;