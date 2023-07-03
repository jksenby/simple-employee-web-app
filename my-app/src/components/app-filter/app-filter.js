import { Component } from 'react';

import './app-filter.css'

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        };
    }

    cycle = () => {
        const buttons = document.querySelectorAll('button.btn.a');
        buttons.forEach(item => item.className = 'btn a btn-outline-light');
    }

    onUpdateFilter = (e) => {
        this.cycle()
        e.target.className = 'btn a btn-light';
        const filter = e.target.value;
        this.setState({filter});
        this.props.onUpdateFilter(filter);
    }

    render() {

        return (
            <div className="btn-group">
                <button 
                    className={'btn a btn-light'}
                    type="button"
                    onClick={this.onUpdateFilter}>
                        Все сотрудники
                </button>
                <button 
                    className={'btn a btn-outline-light'}
                    type="button"
                    value="promotion"
                    onClick={this.onUpdateFilter}>
                        На повышение
                </button>
                <button 
                    className={'btn a btn-outline-light'}
                    type="button"
                    value="moreThan1000"
                    onClick={this.onUpdateFilter}>
                        З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;