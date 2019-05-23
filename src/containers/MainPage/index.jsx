import React, {Component} from 'react';

import {connect} from 'react-redux';

class MainPage extends Component{
    render = () => {
        return (
            <div className="main_page_container">
                Тест
            </div>
        )
    }
}

function mapStore(state){
    return{}
}

function mapDispatches(dispatch){
    return{}
}

export default connect(mapStore, mapDispatches)(MainPage)