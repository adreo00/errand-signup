import React, { PureComponent } from "react"

import Register from "./register"
import Header from "./HeaderComponent"

const Page = prop => {
    return (
        <React.Fragment>
            <Header headerName="User Sign-Up" />
            <Register />
            {/* TODO: Add Footer here */}
        </React.Fragment>
    )
}

export default Page
