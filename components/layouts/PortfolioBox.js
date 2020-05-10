import React from 'react';
import PortfolioBoxModal from './PortfolioBoxModal'

export default class PortfolioBox extends React.Component {
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