import { React, Component } from 'react';
import './App.css';
class App extends Component {
    constructor() {
        super();
        this.state = {
            title: "My React App",
            employeeData: [],
            act: 0,
            index: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let employeeData = this.state.employeeData;
        let name = this.refs.txtName.value;
        let age = this.refs.txtAge.value;
        if (this.state.act === 0) {
            let newEmployee = {
                "name": name,
                "age": age
            }
            employeeData.push(newEmployee);
        } else {
            let index = this.state.index;
            employeeData[index].name = name;
            employeeData[index].age = age;
        }
        this.setState({
            employeeData: employeeData,
            act: 0
        })
        this.refs.myForm.reset();
    }
    handleEdit = (i) => {
        let employeeData = this.state.employeeData[i];
        this.refs.txtName.value = employeeData.name;
        this.refs.txtAge.value = employeeData.age;

        this.setState({
            employeeData: employeeData,
            act: 1,
            index: i
        })
    }
    handleDelete = (i) => {
        let employeeData = this.state.employeeData;
        employeeData.splice(i, 1);
        this.setState({
            employeeData: employeeData
        });
    }

    render() {
        let employeeData = this.state.employeeData;
        return ( <
            div >
            <
            form ref = "myForm"
            className = "myform" >
            <
            h1 > {
                this.state.title
            } < /h1>  <
            label > Name < /label> <
            input type = "text"
            ref = "textName"
            placeholder = "Enter Name"
            className = "formField" / >
            <
            label > Age < /label> <
            input type = "text"
            ref = "textAge"
            placeholder = "Enter Age"
            className = "formField" / >
            <
            button onClick = { e => this.handleSubmit(e) }
            className = "myButtton" > Save < /button> < /
            form >
            <
            table >
            <
            tr >
            <
            th > name < /th> <
            th > Age < /th> < /
            tr > {
                employeeData.map((data, i) =>
                    <
                    tr key = { i } >
                    <
                    td > {
                        data.name
                    } < /td> <
                    td > {
                        data.age
                    } < /td>  <
                    td >
                    <
                    button > onclick = { this.handleEdit(i) }
                    className = "myButtton" > Edit < /button> < /
                    td > <
                    td >
                    <
                    button > onclick = { this.handleDelete(i) }
                    className = "myButtton" > Delete < /button> < /
                    td > <
                    /
                    tr > )

            } <
            /table> < /
            div >
        )
    }
}
export default App;