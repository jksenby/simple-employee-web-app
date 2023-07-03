import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return <EmployeesListItem key={id} 
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
    });

    return (
        <ul className="app-list list-group">
            {elements.length === 0 ? 'There are no employees who would be satisfied with the filters' : elements}
        </ul>
    )
}

export default EmployeesList;