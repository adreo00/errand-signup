import React from "react"

import Checkbox from "@material-ui/core/Checkbox"
import {
    FormGroup,
    FormControlLabel,
    FormLabel,
    FormControl,
    Box,
    Grid,
    TextField,
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
    boxPadding: {
        padding: "30px",
    },
})

const UserTypeForm = props => {
    const { classes } = props
    const { volunteer, requester, firstName, lastName, email } = props
    const error = [volunteer, requester].filter(n => n).length < 1

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    label="First name"
                    fullWidth
                    onChange={props.handleChange}
                    autoComplete="fname"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    label="Last name"
                    fullWidth
                    onChange={props.handleChange}
                    autoComplete="lname"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="email"
                    name="email"
                    value={email}
                    label="Email"
                    required
                    fullWidth
                    onChange={props.handleChange}
                    autoComplete="email"
                />
            </Grid>

            <Box className={classes.boxPadding}>
                <FormControl required error={error} component="fieldset">
                    <FormLabel>What type of user are you?</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={props.volunteer}
                                    onChange={props.handleChange}
                                    name="volunteer"
                                />
                            }
                            label="Volunteer"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={props.requester}
                                    onChange={props.handleChange}
                                    name="requester"
                                />
                            }
                            label="Requester"
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </Grid>
    )
}

export default withStyles(styles)(UserTypeForm)
