import React from 'react';
// import SavedProfilesList from './SavedProfilesList.jsx';

class SaveProfileForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      profile: this.props.recommendation
   }
  }

  onChange(event) {
    this.setState({ profileName: event.target.value});
  }

  render() {
    return (
      <div>
        <input 
          className="input is-large"
          placeholder="Enter a profile name to save"
          value={this.state.profile.profileName} 
          onChange={this.onChange.bind(this)}
        />
        <a class="button is-danger is-outlined"
          onClick={() => {
                this.props.handleSaveProfileButtonClick(this.state.profileName, this.state.profile)
              }}
          >Save Profile?
          </a>
      </div>
    )
  }
}

SaveProfileForm.propTypes = {
  // not currently passing in any props except the click handler
};

export default SaveProfileForm;