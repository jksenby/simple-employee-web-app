import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
             data: [
                {name: 'John C.', salary: 800, increase: false,promotion: false , id: 1},
                {name: 'Alex M.', salary: 3000, increase: false,promotion: false , id: 2},
                {name: 'Carl W.', salary: 15000, increase: false,promotion: false , id: 3}
            ],
            term: '',
            filter: ''
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        this.setState(({data}) => {
            if(name.length > 2 && salary.length > 0) {
            return {
                data: [...data, {name: name, salary: salary,increase:false, promotion:false, id:data[data.length - 1].id + 1}]
            }
        }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item =>{
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if(term.length === 0) return items;

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'promotion':
                return items.filter(item => item.promotion);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
        <div className="app">
            <AppInfo data={this.state.data}/>

            <div className="search-panel">
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter onUpdateFilter={this.onUpdateFilter}/>
            </div>

            <EmployeesList data={visibleData}
                           onDelete={this.deleteItem}
                           onToggleProp={this.onToggleProp}/>
            <EmployeesAddForm onAdd={this.addItem}/>
        </div>
    )
    }
}

export default App;