import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import I18n from "redux-i18n";
import {setLanguage} from "redux-i18n"
import {translations} from "../translations";
import FilterBox from '../components/FilterBox';
import '../assets/App.css';

class App extends Component {
    componentWillMount() {
        this.props.translate("en");
    }

    render() {
        const {store} = this.props;
        return (
            <Provider store={store}>
                <I18n translations={translations}>
                    <div>
                        <FilterBox/>
                    </div>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    translate: (lang) => dispatch(setLanguage(lang))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);