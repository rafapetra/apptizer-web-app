import $ from 'jquery';
import 'jquery-ui/ui/widgets/slider';
import React, { useState } from 'react';

const Calculator = () => {
  const [carbPreset, setCarbPreset] = useState(0.5);
  const [protPreset, setProtPreset] = useState(0.3);
  const [fatPreset, setFatPreset] = useState(0.2);
  const [calories, setCalories] = useState(0);
  const [carbGram, setCarbGram] = useState(0);
  const [protGram, setProtGram] = useState(0);
  const [fatGram, setFatGram] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateNutrients();
  };

  const setPreset = (input) => {
    switch (input) {
      case 1:
        setCarbPreset(0.6);
        setProtPreset(0.25);
        setFatPreset(0.15);
        break;
      case 2:
        setCarbPreset(0.5);
        setProtPreset(0.3);
        setFatPreset(0.2);
        break;
      case 3:
        setCarbPreset(0.4);
        setProtPreset(0.3);
        setFatPreset(0.3);
        break;
      case 4:
        setCarbPreset(0.25);
        setProtPreset(0.45);
        setFatPreset(0.3);
        break;
      default:
        setCarbPreset(0.5);
        setProtPreset(0.3);
        setFatPreset(0.2);
    }
    calculateNutrients();
  };

  const calculateNutrients = () => {
    const carb = Math.round(carbPreset * calories * 0.25);
    const prot = Math.round(protPreset * calories * 0.25);
    const fat = Math.round(fatPreset * calories * 0.1111);

    setCarbGram(carb);
    setProtGram(prot);
    setFatGram(fat);
  };

  return (
    <div>
      <form id="nutrient" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="calories">Daily calories</label>
          <input
            id="calories"
            className="form-control"
            type="number"
            placeholder="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-default">Calculate</button>
      </form>

      <p>
        <label htmlFor="customCarb">Carbohydrate</label>
        <input
          id="customCarb"
          className="form-control"
          type="text"
          readOnly
          style={{ border: '0', color: '#f6931f', fontWeight: 'bold' }}
          value={carbGram}
        />
      </p>

      {/* Add other input fields and elements */}

      <div className="carb">{carbGram}</div>
      <div className="prot">{protGram}</div>
      <div className="fat">{fatGram}</div>
    </div>
  );
};

export default Calculator;