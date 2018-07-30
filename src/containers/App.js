import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import I18n from "redux-i18n";
import {translations} from "../translations";
import '../assets/App.css';

class App extends Component {
    render() {
        const {store} = this.props;
        return (
            <Provider store={store}>
                <I18n translations={translations}>
                    <div></div>
                </I18n>
            </Provider>
        );
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired
};

App.contextTypes = {
    t: PropTypes.func
};

export default App;