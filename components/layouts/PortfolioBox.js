import React from 'react';
import moment from 'moment';
import PortfolioBoxModal from './PortfolioBoxModal'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import github from "../github-auth";

export default class PortfolioBox extends React.Component {
/*
    async fetchPortfolio(postID) {
        let post = {};
        let languages = [];
        try {
            const response = await github.get(`/repos/alpgokcek/${postID}`);
            const responseLanguages = await github.get(`/repos/alpgokcek/${postID}/languages`);
            languages = Object.keys(responseLanguages.data);
            post = response.data;
        } catch (e) {
            console.log(e)
        }

        return {post, languages}
    }
*/
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        const { portfolio, children } = this.props;
        const { isOpen } = this.state;
        return (
            <div className="portfolio-box" onClick={this.handleToggle}>
                <PortfolioBoxModal key={this.props.portfolio.name} toggle={this.handleToggle} portfolio={this.props.portfolio} isOpen={isOpen}/>
                <h4>{portfolio.name}</h4>
                <p>{portfolio.description}</p>
            </div>
        );
    }

}


/*
<h4>Created: {moment(this.props.createdAt).format("dddd, MMMM Do YYYY")}</h4>
                <h4>Last Update: {moment(this.props.updatedAt).format("dddd, MMMM Do YYYY")}</h4>
                <h4>Language: {this.props.language.toString()}</h4>
 */