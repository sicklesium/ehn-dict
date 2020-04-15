import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios"
import MaterialTable from "material-table";

// class DictCard extends React.Component {
//     render() {
//         return (
//             <MaterialTable
//                 title="Éinhyun Comprehensive Dictionary"
//                 columns={[
//                     { title: 'First Name', field: 'ehn_word' },
//                     { title: 'Last Name', field: 'eng_trans' },
//                 ]}
//                 data={query =>
//                     new Promise((resolve, reject) => {
//                         let url = 'https://ehn-eng.herokuapp.com/api/words'
//                         fetch(url)
//                             .then(response => response.json())
//                             .then(result => {
//                                 resolve({
//                                     data: result.data,
//                                     page: result.page - 1,
//                                     totalCount: result.total,
//                                 })
//                             })
//                     })
//                 }
//                 options={{
//                     filtering: true
//                 }}
//             />
//         )
//     }
// }

const DictCard = (props) => {
    const [words, setWords] = useState()

    useEffect(() => {
        axios
            .get("https://ehn-eng.herokuapp.com/api/words")
            .then(res => setWords(res.data))
            .catch(err => console.log(err));
    }, []);


    return (
        <MaterialTable
            title="Éinhyun Comprehensive Dictionary"
            columns={[
                { title: 'Éinhyun Wul', field: 'ehn_word' },
                { title: "Part of Speech", field: 'ehn_pos' },
                { title: 'English Word', field: 'eng_trans' },
            ]}
            data={words}
            options={{
                filtering: true,
                detailPanelType: 'single',
                pageSize: 10,
                pageSizeOptions: [10, 50, 100],
                search: false,
            }}
            detailPanel={rowData => {
                return (
                    <div style={{
                        textAlign: 'center',
                        color: 'white',
                        backgroundColor: '#A30000',
                        padding: '3%',
                    }}>
                        <div style={{
                            fontSize: '2rem',

                        }}>
                            {rowData.ehn_ipa}
                        </div>
                        <div style={{
                                textSize: '1rem',
                            }}>
                                {!rowData.example ? (
                                    <p>Sorry, there isn't an example translation of this word yet!</p>
                                ) : (
                                        <p>{rowData.example}</p>
                                )
                            }
                            </div>
                    </div>
                )
            }}
            onRowClick={(event, rowData, togglePanel) => togglePanel()}
        />
    )
}

export default DictCard;