import React, { Component } from 'react';
import axios from 'axios';
let localdata = require('../data/data.json');

class Content extends Component {
    
    header = ['No', 'User Id', 'Title', 'Description'];
    state = {
        data: [],
        input: '',
        localData: []
    }

    componentDidMount() {
        /*
        ** API data Setup
        */
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
        .then(res => {
            const data = res.data;
            this.setState({ data });
            this.setState({localData: data});
        })
        /*
        ** Local data Setup
        */
        //this.setState({data : localdata});
    }

    filterTable = (e) => {
        this.setState({
            input: e.target.value,
        });

        /*
        ** API data setup
        */
        let localData = this.state.localData;
        
        /*
        ** Local Data Setup
        */
        
        // let localData = localdata;
        let updatedData = localData.filter((val,inx) => {
            return val.title.includes(e.target.value);
        });
        this.setState({data: updatedData});
    }

    render() {
        return (
            <div className={'container'}>
                <div className={'filter'}>
                    Filter data as per title: - <input type='text' onChange={this.filterTable} value={this.state.input}/>
                </div>
                <div className={'table-content'}>
                    <table>
                        <tbody>
                            <tr>
                                {
                                    this.header.map((val) => {
                                        return(
                                            <th key={val}>{val}</th>
                                        )
                                    })
                                }
                            </tr>
                            {
                                this.state.data.map((val) => {
                                    return(
                                        <tr key={val.id}>
                                            <td>{val.userId}</td>
                                            <td>{val.id}</td> 
                                            <td>{val.title}</td>
                                            <td>{val.body}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Content;