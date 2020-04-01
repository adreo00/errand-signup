import React, { useEffect, useState } from "react"
import MaterialTable from "material-table"
import { Container, Typography, ExpansionPanelDetails } from "@material-ui/core"
import getUsers from "./actions/getUsers"

const initialState = {
    data: [
        {
            name: "Mehmet",
            id: 1,
            address1: "123 Testy Street",
            city: "Dumb Town",
            state: "NV",
            notes:
                "This is a test of a long detailed response. Really way to much information to be giving a Table view",
            surname: "Baran",
            zip: "11111",
            birthYear: 1987,
            birthCity: 63,
        },
        {
            name: "Zerya Betül",
            id: 13,
            address1: "1232 Teste Street",
            city: "Dump Town",
            state: "ND",
            notes:
                "If you feel completely stuck, start by keeping all files in a single folder. Eventually it will grow large enough that you will want to separate some files from the rest. By that time you’ll have enough knowledge to tell which files you edit together most often. In general, it is a good idea to keep files that often change together close to each other. This principle is called colocation",
            surname: "Baran",
            zip: "11133",
            birthYear: 2017,
            birthCity: 34,
        },
    ],
    columns: [
        // { title: "ID", field: "id" },
        { title: "Address", field: "address1" },
        { title: "City", field: "city" },
        { title: "Zip code", field: "zip" },
        { title: "State", field: "state" },
        { title: "Country", field: "country" },
    ],
}

const ViewForm = props => {
    const [state, setState] = useState(initialState)
    useEffect(() => {
        const users = getUsers(TABLE_NAME)
        setState(users)
        console.log("useEffect")
    }, []) // run once
    // const { data } = props
    return (
        <Container>
            <div style={{ maxWidth: "100%" }}>
                <MaterialTable
                    // title="People Requesting Help"
                    columns={state.columns}
                    data={state.data}
                    detailPanel={rowData => {
                        return (
                            <ExpansionPanelDetails>
                                <Typography>{rowData.notes}</Typography>
                            </ExpansionPanelDetails>
                        )
                    }}
                    onRowClick={(event, rowData, togglePanel) => togglePanel()}
                    options={{
                        selection: true,
                        showSelectAllCheckbox: false,
                        showTextRowsSelected: false,
                        selectionProps: rowData => ({
                            disabled: rowData.status === "claimed",
                            color: "primary",
                        }),
                        filtering: true,
                    }}
                />
            </div>
        </Container>
    )
}

export default ViewForm
