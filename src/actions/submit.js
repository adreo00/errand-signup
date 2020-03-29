// import { axios } from "axios"

// axios.request

import awsconfig from "./aws-exports"

Amplify.configure(awsconfig)
import Amplify, { Analytics, Storage, API } from "aws-amplify"

// Configure Amplify
API.configure(awsconfig)
Storage.configure(awsconfig)

var dynamodb = new AWS.DynamoDB()
Storage.put()

export default submit
