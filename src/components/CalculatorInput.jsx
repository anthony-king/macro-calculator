import React from 'react';

class CalculatorInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: 'female',
      weight: '',
      goal: 'musclegain'
    }
  }

  onChange(event) {
    // fix this jankiness by making an object first and then setting the state
    if (event.target.id === 'weight') {
      this.setState({
        weight: event.target.value // this change doesn't seem to happen instantaneously
      });
    } else {
      this.state[event.target.id] = event.target.value;
    }
  }

  render() {
    return (
      <div>

        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="field is-horizontal">
                <div className="field-label is-large">
                  <label className="label">Weight</label>
                </div>
                <div className="field-body is-small">
                  <div className="field">
                    <p className="control">
                      <input 
                        className="input is-large"
                        id="weight"
                        type="text"
                        placeholder="weight"
                        value={this.state.weight} 
                        onChange={this.onChange.bind(this)}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>  

          <div className="level-right">
            <div className="level-item">    
              <div className="field is-horizontal">
                <div className="field-label is-large">
                  <label id="sex" className="label">Sex</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <div className="control">
                      <div className="select is-fullwidth is-large">
                        <select id="sex" onChange={this.onChange.bind(this)} >
                          <option value="female" >Female</option>
                          <option value="male" >Male</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="field is-horizontal">
                <div className="field-label is-large">
                  <label className="label">Goal</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <div className="control">
                      <div className="select is-fullwidth is-large">
                        <select id="goal" onChange={this.onChange.bind(this)} >
                          <option value="musclegain"> Muscle Gain</option>
                          <option value="fatloss">Fat Loss</option>
                          <option value="recomposition">Recomposition</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="level-right">
            <div className="level-item">  
              <div className="field is-horizontal">
                <div className="field-label">
                  
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <button className="button is-danger is-outlined is-large"
                        onClick={() => {
                          this.props.handleCalculateButtonClick(this.state.sex, this.state.weight, this.state.goal)
                        }}
                        >
                        Calculate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>  
    )
  }

}

export default CalculatorInput;