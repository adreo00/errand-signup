// import Amplify, { Analytics, Storage, API } from "aws-amplify"
import AWS from "aws-sdk"

// import awsconfig from "../aws-exports"

const marshall = AWS.DynamoDB.Converter.marshall
const putItem = (table_name, item) => {
    const dynamoItem = marshall(item)
    let ddb = new AWS.DynamoDB()

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

    ddb.batchWriteItem(params, function(err, data) {
        if (err) {
            console.log("Error", err)
        } else {
            console.log("Success", data)
        }
    })
}
// Amplify.configure(awsconfig)

// API.configure(awsconfig)
// Storage.configure(awsconfig)
// Storage.put()

export default putItem
