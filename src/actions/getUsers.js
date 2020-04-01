// import Amplify, { Analytics, Storage, API } from "aws-amplify"
import AWS from "aws-sdk"
import config from "../secrets/config"

const marshall = AWS.DynamoDB.Converter.marshall
const getUsers = table_name => {
    // const dynamoItem = marshall(item)

    const params = {
        TableName: table_name,
    }

    let ddb = new AWS.DynamoDB(config)

    const sendRequest = async params => {
        try {
            //https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#scan-property
            const resp = await ddb.scan(params).promise()
            console.log("Success", resp)
            return resp
        } catch (err) {
            console.log("Error", err)
        }
    }

    return sendRequest(params)
}

export default getUsers
