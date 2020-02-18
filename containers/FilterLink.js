import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { setVisibleFilter } from '../actions';

const mapStateToProps = (store, ownProps) => ({
  active: ownProps.filter === store.visibleFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibleFilter(ownProps.filter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
