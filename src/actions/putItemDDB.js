// import Amplify, { Analytics, Storage, API } from "aws-amplify"
import AWS from "aws-sdk"
import config from "../secrets/config"

// import awsconfig from "../aws-exports"

const marshall = AWS.DynamoDB.Converter.marshall
const putItemDDB = (table_name, item) => {
    const dynamoItem = marshall(item)
    let ddb = new AWS.DynamoDB(config)

    var params = {
        RequestItems: {
            [table_name]: [
                {
                    PutRequest: {
                        Item: dynamoItem,
                    },
                },
            ],
        },
    }
    const sendRequest = async params => {
        try {
            const resp = await ddb.batchWriteItem(params).promise()
            console.log("Success", resp)
        } catch (err) {
            console.log("Error", err)
        }
    }

    sendRequest(params)
}

export default putItemDDB
