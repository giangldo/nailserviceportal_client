import { connect } from 'react-redux';

const authenticateSelector = state => state.store.auth.authenticated;
const currentUserSelector = state => state.store.auth.currentUser;
const onlineSelector = state => state.store.meta.online;

const mapStateToProps = state => ({
    authenticated: authenticateSelector(state),
    currentUser: currentUserSelector(state),
    online: onlineSelector(state)
});

export default connect(mapStateToProps, {});