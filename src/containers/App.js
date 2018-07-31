import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import I18n from "redux-i18n";
import {setLanguage} from "redux-i18n"
import {translations} from "../translations";
import Filter from './Filter';
import Result from './Result';
import '../assets/App.css';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing.unit * 3,
    },
});

class App extends Component {
    componentWillMount() {
        this.props.translate("en");
    }

    render() {
        const {store,classes} = this.props;
        return (
            <Provider store={store}>
                <I18n translations={translations}>
                    <div className={classes.container}>
                        <Filter/>
                        <Result/>
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
)(withStyles(styles)(App));