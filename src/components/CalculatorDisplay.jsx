import React from 'react';
import SaveProfileForm from './SaveProfileForm.jsx';
// import axios from 'axios';

class CalculatorDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleSaveProfileButtonClick(profileInfo) {
  //   console.log('save this to database!!')
  //   // axios.post('/repos', profileInfo)
  //   //   // `/repos/${term}` alternative first arg to pass along the term variable
  //   //   .then(res => {
  //   //     // TODO:
  //   //     // use repsonse to add to the profiles array
  //   //     ;
  //   //   }).catch((err) => { console.err(err.message) });
  // }

  render() {
    if (this.props.recommendation.display) {
      return (
        <div className="recommendation is-size-4">
          <div>
          <p>Recommendation</p>
            <ul>
              <li>Protein: {this.props.recommendation.protein}g</li>
              <li>Carboydates: {this.props.recommendation.carbs}g</li>
              <li>Fat: {this.props.recommendation.fat}g</li>
              <li>Calories: {this.props.recommendation.calories}</li>
            </ul>
          </div>
          <SaveProfileForm
            recommendation={this.props.recommendation}
            handleSaveProfileButtonClick={this.props.handleSaveProfileButtonClick}
          />
        </div>
      )
    } else {
      return null;
    }
  }
}

export default CalculatorDisplay;