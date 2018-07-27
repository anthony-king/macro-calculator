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
          <div class="level-left">
            <div class="level-item">
              <div className="field is-horizontal">
                <div class="field-label is-large">
                  <label class="label">Weight</label>
                </div>
                <div class="field-body is-small">
                  <div class="field">
                    <p class="control">
                      <input 
                        class="input is-large"
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

          <div class="level-right">
            <div class="level-item">    
              <div class="field is-horizontal">
                <div class="field-label is-large">
                  <label class="label">Sex</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control">
                      <div class="select is-fullwidth is-large">
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
            <div class="level-item">
              <div class="field is-horizontal">
                <div class="field-label is-large">
                  <label class="label">Goal</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control">
                      <div class="select is-fullwidth is-large">
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

          <div class="level-right">
            <div class="level-item">  
              <div class="field is-horizontal">
                <div class="field-label">
                  
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <button class="button is-danger is-outlined is-large"
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