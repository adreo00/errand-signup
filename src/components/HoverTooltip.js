import React from "react"
import { Tooltip } from "@material-ui/core"

const HoverTooltip = props => {
    return (
        <Tooltip title={props.title} disableFocusListener>
            {props.children}
        </Tooltip>
    )
}

export default HoverTooltip
