import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import { Button, Tooltip } from "@material-ui/core"

const HoverTooltip = props => {
    return (
        <Tooltip title={props.title} disableFocusListener>
            {props.children}
        </Tooltip>
    )
}

export default function AddressForm(props) {
    const { address1, address2, city, state, zip, country } = props
    // const error = [, ].filter(n => n).length < 1

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <HoverTooltip title="The address field will be used pair the closest volunteer/requesters.">
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            value={address1}
                            fullWidth
                            autoComplete="billing address-line1"
                            onChange={props.handleChange}
                        />
                    </HoverTooltip>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        value={address2}
                        label="Address line 2"
                        fullWidth
                        autoComplete="billing address-line2"
                        onChange={props.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        value={city}
                        label="City"
                        fullWidth
                        autoComplete="billing address-level2"
                        onChange={props.handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        value={state}
                        label="State/Province/Region"
                        onChange={props.handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        value={zip}
                        label="Zip / Postal code"
                        onChange={props.handleChange}
                        fullWidth
                        autoComplete="billing postal-code"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        value={country}
                        label="Country"
                        fullWidth
                        autoComplete="billing country"
                        onChange={props.handleChange}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
