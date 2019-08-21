import React from 'react';
import Header from '../components/shared/Header'
import BaseLayout from "../components/layouts/BaseLayout"
import axios from 'axios';
import "../styles/styles.scss";



class Homepage extends React.Component{

    static async getInitialProps(){
        let userData=null;
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            userData=response.data;
            console.log(userData)
        }catch (e) {
            console.log(e)
        }

        return {initialData:[0,1,2,3], userData}
    }

    constructor(props) {
        super(props);
        this.state = {
            title:'SDANJKDSANJD'
        }
    }


    updateTitle = () => {(
        this.setState({title:'Vay aq'}))};


    render() {
        let title = this.state.title;
        return(
            <BaseLayout>
                <h1 className="example">Index</h1>
                <h1 className="example">{title}</h1>
                <button onClick={this.updateTitle}>Change Title</button>
            </BaseLayout>
        );
    }
}
export default Homepage;