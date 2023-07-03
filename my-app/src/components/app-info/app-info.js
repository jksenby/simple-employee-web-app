import './app-info.css'

const AppInfo = ({data}) => {
    const allEmployees = data.length;
    const increased = data.filter(item => item.increase).length

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Z-Project</h1>
            <h2>Общее число сотрудников: {allEmployees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;