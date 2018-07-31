import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
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
    const {classes, location, minPrice, minBeds, disabled, onSubmit, handleFieldChange} = props;
    return (
        <div>
            <form className={classes.container} noValidate autoComplete="off">
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <TextField fullWidth
                                   error={false}
                                   disabled={disabled}
                                   label={context.t("location")}
                                   value={location}
                                   margin="normal"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField fullWidth
                                   error={false}
                                   disabled={disabled}
                                   label={context.t("min-price")}
                                   value={minPrice}
                                   type="number"
                                   margin="normal"
                                   onChange={(e) => handleFieldChange({"minPrice": e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField fullWidth
                                   error={false}
                                   disabled={disabled}
                                   label={context.t("min-beds")}
                                   value={minBeds}
                                   type="number"
                                   margin="normal"
                                   onChange={(e) => handleFieldChange({"minBeds": e.target.value})}
                        />
                    </Grid>
                    <Grid item xs>
                        <Button variant="contained" color="primary" className={classes.button} onClick={onSubmit}>
                            {context.t("submit")}
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

FilterBox.contextTypes = {
    t: PropTypes.func.isRequired
};

FilterBox.propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(FilterBox);