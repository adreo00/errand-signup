import React from "react"
import { Snackbar } from "@material-ui/core"

const Response = props => {
    const getSeverity = statusCode => {
        if (statusCode === 200) {
            return "success"
        } else {
            return "error"
        }
    }

    const severity = getSeverity({ httpResponse })

    const [state, setState] = React.useState({
        open: false,
    })
    return <Snackbar open={props.open} severity={severity}></Snackbar>
}

export default Response
