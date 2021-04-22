import React from 'react';
import {connect} from 'react-redux';
import userActions from '../../Redux/Modules/User/user.actions'

class UserDetail extends React.Component {
    render() {
        return (
            <div>
                <input type="number" placeholder="userId" value={this.props.userId}/>
                <button onClick={() => {this.props.setUserId(2)}}>Get Data</button>
            </div>
        );
    }
};

const mapstatetoprops = (state) => ({
    userId: state.user.userId,
});

const mapDispathtoProps = dispatch => ({
    setUserId: userId => dispatch(userActions.setUserId(userId))
});

export default connect(mapstatetoprops, mapDispathtoProps)(UserDetail);