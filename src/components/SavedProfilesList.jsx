import React from 'react';

class SavedProfilesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return null;
  // if (!this.props.profiles.length) { return null; }
  //   // if there any saved profiles, the list should render by mapping through the profiles array
  //   return (
  //     <div>
  //       {
  //         this.props.profiles.map((profile) {
  //           <SavedProfilesListEntry profile={profile} />
  //         });
  //       }
  //     </div>
  //   )
  }
}

// SavedProfilesList.propTypes = {
//   profiles: React.PropTypes.array.isRequired
// };

export default SavedProfilesList;