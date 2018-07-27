import React from 'react';
import ReactDOM from 'react-dom';

import { formatAmount } from './utils.js';

import CalculatorInput from './components/CalculatorInput.jsx';
import CalculatorDisplay from './components/CalculatorDisplay.jsx';
import SaveProfileForm from './components/SaveProfileForm.jsx';
import SavedProfilesList from './components/SavedProfilesList.jsx';
import SavedProfilesListEntry from './components/SavedProfilesListEntry.jsx';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendation: {
        protein: undefined,
        carbs: undefined,
        calories: undefined,
        display: false
      },
      profiles: []
    }
  }

  handleCalculateButtonClick(sex, weight, goal) {
    // move this object to another file? It clutters up this function
    let guidelines =
        { male: {recomposition:   {cal: 12.75, protein: 1.15, carb: 1.25, fat: 0.35 },
                       fatloss:   {cal: 11.43, protein: 1.25, carb: 1,    fat: 0.27 },
                    musclegain:   {cal: 16.9,  protein: 1.1,  carb: 2,    fat: 0.5  }},
        female: {recomposition:   {cal: 12.62, protein: 1.1,  carb: 1.2,  fat: 0.38 },
                       fatloss:   {cal: 11.35, protein: 1.15, carb: 0.9,  fat: 0.35 },
                    musclegain:   {cal: 14.9,  protein: 1,    carb: 1.6,  fat: 0.5  }}
        };
    let customGuidelines = guidelines[sex][goal];
    this.setState({recommendation: {
      protein: Math.round(customGuidelines.protein * weight),
      carbs: Math.round(customGuidelines.carb * weight),
      fat: Math.round(customGuidelines.fat * weight),
      calories: Math.round(customGuidelines.cal * weight),
      display: true,
      sex: sex,
      weight: parseInt(weight),
      goal: goal
    }});
  }

  handleSaveProfileButtonClick(name, profile) {
    profile.name = name;
    // this seems a little janky to me but I had a hard time adding the name property to
    // profile inside of SaveProfileForm
    console.log(profile, 'save this profile to database')
    // okay genius, how do you do this? you used axios last time
      // two things should happen when the submit button is clicked
        // the profile should be saved to the database
        // the profile should be included in the response and pushed to the this.state.profiles array
    axios.post('/save', profile)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  render () {
    return (
      <div className="container">
        <h2 className="title has-text-centered">Enter your stats and goal</h2>
        <CalculatorInput
          handleCalculateButtonClick={this.handleCalculateButtonClick.bind(this)}
        />
        <CalculatorDisplay
          handleSaveProfileButtonClick={this.handleSaveProfileButtonClick.bind(this)}
          recommendation={this.state.recommendation}
        />
        <SavedProfilesList profiles={this.state.profiles} />
      </div>
    )
  }
}

// export class Main extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             monthlyIncome: 20000,
//             monthlyExpenses: 12000
//         }
//     }

//     render() {
//         const youMayLoan = Math.max(0, (this.state.monthlyIncome - this.state.monthlyExpenses) / 0.05 * 12);

//         return (
//             <section className="section">
//                 <div className="container">
//                     <h1 className="title">
//                         Priceless Financial Advice
//                     </h1>
//                     <div className="columns">
//                         <div className="column">
//                             <h2 className="subtitle">
//                                 <span className="icon has-text-info"><i className="fa fa-bolt"></i></span>
//                                 Your Current Finances
//                             </h2>
//                             <form>
//                                 <div className="field">
//                                     <label className="label">Monthly Income</label>
//                                     <div className="control">
//                                         <input 
//                                             className="input" 
//                                             type="text" 
//                                             placeholder="Monthly Income ..." 
//                                             value={this.state.monthlyIncome} 
//                                             onChange={(e) => this.setState({monthlyIncome: e.target.value})}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="field">
//                                     <label className="label">Monthly Expenses</label>
//                                     <div className="control">
//                                         <input 
//                                             className="input" 
//                                             type="text" 
//                                             placeholder="Monthly Expenses ..." 
//                                             value={this.state.monthlyExpenses} 
//                                             onChange={(e) => this.setState({monthlyExpenses: e.target.value})}
//                                         />
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="column">
//                             <h2 className="subtitle">
//                                 <span className="icon has-text-success"><i className="fa fa-home"></i></span>
//                                 Your Future Finances
//                             </h2>
//                             <p>You may buy a house for:</p>
//                             <p>&nbsp;</p>
//                             { 
//                                 youMayLoan > 0 &&
//                                 <div className="notification is-primary">
//                                     <h1 className="title">{formatAmount(youMayLoan, 0)}</h1>
//                                 </div>
//                             }
//                             { youMayLoan > 10000000 && <p>Because you are very rich.</p> }
//                             { 
//                                 youMayLoan == 0 &&
//                                 <div className="notification is-warning">
//                                     <h1 className="title">NOTHING !!!!</h1>
//                                 </div>
//                             }
//                             { youMayLoan < 100000 && <p>Because you are very poor.</p> }

//                             { 
//                                 isNaN(youMayLoan) && 
//                                 <div className="notification is-danger">HEY! Rubbish won&#39;t help you at the bank.</div>
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         )
//     }
// }
