import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LocationAutoComplete from './LocationAutoComplete';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
    root: {
        width: '100%',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing.unit * 3,
    },
    button: {
        marginTop: 27,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
    },
});

const FilterBox = (props) => {
    const {
        classes, filterBoxState, onSubmit, onFilterMinBedsFieldChange,
        onFilterMinPriceFieldChange, onLocationChange, onSelectionComplete,
        onMessageBoxClose, clearFilters
    } = props;
    return (
        <div className={classes.root}>
            <form className={classes.container} noValidate autoComplete="off">
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <LocationAutoComplete
                            error={filterBoxState.get('locationError')}
                            disabled={filterBoxState.get('disabled')}
                            label="Location"
                            value={filterBoxState.get('selectedLocation').toJS()}
                            suggestions={filterBoxState.get('suggestions').toJS()}
                            onChange={onLocationChange}
                            onSelectionComplete={onSelectionComplete}/>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField fullWidth
                                   error={filterBoxState.get('minPriceError')}
                                   disabled={filterBoxState.get('disabled')}
                                   label="Min Price"
                                   value={filterBoxState.get('minPrice')}
                                   type="number"
                                   margin="normal"
                                   onChange={(e) => onFilterMinPriceFieldChange({
                                       "property": "minPrice",
                                       "value": e.target.value
                                   })}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField fullWidth
                                   error={filterBoxState.get('minBedsError')}
                                   disabled={filterBoxState.get('disabled')}
                                   label="Min Beds"
                                   value={filterBoxState.get('minBeds')}
                                   type="number"
                                   margin="normal"
                                   onChange={(e) => onFilterMinBedsFieldChange({
                                       "property": "minBeds",
                                       "value": e.target.value
                                   })}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="primary" className={classes.button} onClick={onSubmit}
                                disabled={filterBoxState.get('disabled')}>
                            Submit
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="contained" color="secondary" className={classes.button} onClick={clearFilters}
                                disabled={filterBoxState.get('disabled')}>
                            Clear
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={filterBoxState.get('messageBoxOpen')}
                onClose={() => onMessageBoxClose()}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Enter all values!</span>}
            />
        </div>
    );
};

FilterBox.defaultProps = {
    onSubmit: () => {
        throw new Error("onSubmit is not implemented!");
    },
    onMessageBoxClose: () => {
        throw new Error("onMessageBoxClose is not implemented!");
    }
};

FilterBox.propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onMessageBoxClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(FilterBox);
