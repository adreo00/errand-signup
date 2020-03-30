import React from "react"
import ReactDOM from "react-dom"
import * as AWS from "aws-sdk"
import Amplify, { Storage } from "aws-amplify"

import awsconfig from "./aws-exports"
import App from "./App"

// let credentials = new AWS.SharedIniFileCredentials({ profile: "amplify" })
// AWS.config.credentials = credentials
// AWS.config.loadFromPath("./config.json")

// Amplify.configure(awsconfig)

ReactDOM.render(<App />, document.getElementById("root"))
