import React from "react"
import { Container, Button, Box, Typography } from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"

import UserTypeForm from "./userTypeForm"
import AddressForm from "./addressForm"
import putItem from "../actions/addUser"

import { TABLE_NAME } from "../constants"

const RegisterForm = () => {
    const [state, setState] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        volunteer: false,
        requester: false,
        address1: "",
        address2: "",
        city: "",
        state: "",
        response: null,
    })
    const handleSubmit = event => {
        event.preventDefault()
        const response = putItem(TABLE_NAME, state)
        setState({ ...state, response: response })
    }

    const handleChange = event => {
        const { target } = event
        if (target.type === "checkbox") {
            setState({ ...state, [event.target.name]: event.target.checked })
        } else {
            setState({ ...state, [event.target.name]: event.target.value })
        }
    }
    return (
        <React.Fragment>
            <Alert severity="info">
                Your personal data will not be shared.
            </Alert>
            {/* <Typography variant="span" gutterBottom></Typography> */}
            <Container>
                <form onSubmit={handleSubmit}>
                    <Box>
                        <UserTypeForm
                            handleChange={handleChange}
                            firstName={state.firstName}
                            lastName={state.lastName}
                            email={state.email}
                            volunteer={state.volunteer}
                            requester={state.requester}
                        />
                        <AddressForm
                            handleChange={handleChange}
                            address1={state.address1}
                            address2={state.address2}
                            city={state.city}
                            state={state.state}
                        />
                    </Box>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Container>
        </React.Fragment>
    )
}

export default RegisterForm
