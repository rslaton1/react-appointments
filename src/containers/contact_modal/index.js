import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import ContactModal from '../../components/contact_modal';

function mapStateToProps({ modal, timeSlots }) {
  const { timeSlotID } = modal;
  const timeSlot = timeSlots[timeSlotID] || { id: timeSlotID, name: '', phone: '' };
  return { modal, timeSlot };
}

function mapDispatchToProps(dispatch) {
  return {
    hideModal: bindActionCreators(actions.hideModal, dispatch),
    saveTimeSlot: bindActionCreators(actions.saveTimeSlot, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactModal);
