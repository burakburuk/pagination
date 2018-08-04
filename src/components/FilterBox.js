import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LocationAutoComplete from './LocationAutoComplete';

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

const FilterBox = (props, context) => {
    const {
        classes, location, locationError, minPrice,
        minPriceError, minBeds, minBedsError, disabled,
        onSubmit, onFilterMinBedsFieldChange,
        onFilterMinPriceFieldChange, onLocationChange,
        onSelectionComplete, suggestions
    } = props;
    return (
        <div className={classes.root}>
            <form className={classes.container} noValidate autoComplete="off">
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <LocationAutoComplete
                            error={locationError}
                            disabled={disabled}
                            label="Location"
                            value={location}
                            suggestions={suggestions}
                            onChange={onLocationChange}
                            onSelectionComplete={onSelectionComplete}/>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField fullWidth
                                   error={minPriceError}
                                   disabled={disabled}
                                   label="Minimum Price"
                                   value={minPrice}
                                   type="number"
                                   margin="normal"
                                   onChange={(e) => onFilterMinPriceFieldChange({
                                       "property": "minPrice",
                                       "value": e.target.value
                                   })}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField fullWidth
                                   error={minBedsError}
                                   disabled={disabled}
                                   label="Minimum Beds"
                                   value={minBeds}
                                   type="number"
                                   margin="normal"
                                   onChange={(e) => onFilterMinBedsFieldChange({
                                       "property": "minBeds",
                                       "value": e.target.value
                                   })}
                        />
                    </Grid>
                    <Grid item xs>
                        <Button variant="contained" color="primary" className={classes.button} onClick={onSubmit}
                                disabled={disabled}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

FilterBox.defaultProps = {
    onSubmit: () => {
        throw new Error("onSubmit is not implemented!");
    }
};

FilterBox.propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(FilterBox);
