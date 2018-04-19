import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import TimeSlot from '../../components/time_slot';

function mapStateToProps({ timeSlots }, props) {
  const { time } = props;
  const available = !(timeSlots[time]);
  return { time, available };
}

function mapDispatchToProps(dispatch) {
  return {
    showModal: bindActionCreators(actions.showModal, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeSlot);
