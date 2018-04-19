import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TimeSlot from '../../components/time_slot';

function mapDispatchToProps(dispatch) {
  return {
    displayModal: bindActionCreators(null, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(TimeSlot);
