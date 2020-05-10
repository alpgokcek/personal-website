import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';
import github from "../github-auth";

class PortfolioBoxModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }


    static async getLangs(name) {
        let languages = [];
        try {
            const responseLanguages = await github.get(`/repos/alpgokcek/${name}/languages`);
            languages = Object.keys(responseLanguages.data);
        } catch (e) {
            console.log(e)
        }

        return languages;
    }

    componentDidMount() {
        PortfolioBoxModal.getLangs(this.props.portfolio.name).then((response)=>{
            this.setState({data:response})
        })
    }



    render() {
        const {toggle, portfolio,isOpen } = this.props;
        const responseLanguages=this.state.data;
        return (
            <div>
                <Modal isOpen={isOpen} toggle={toggle}>
                    <ModalHeader className="text-color-pb" toggle={toggle}>{portfolio.name}</ModalHeader>
                    <ModalBody>
                        <p className="text-color-pb"><b>Description: </b>{portfolio.description}</p>
                        <p className="text-color-pb"><b>Created At: </b>{moment(portfolio.created_at).format("dddd, MMMM Do YYYY")}</p>
                        <p className="text-color-pb"><b>Last Update: </b>{moment(portfolio.pushed_at).format("dddd, MMMM Do YYYY")}</p>
                        <p className="text-color-pb"><b>Languages: </b>{responseLanguages.toString()}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={()=>{window.location.assign(`https://github.com/alpgokcek/${portfolio.name}`)}}>Check out at GitHub!</Button>
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default PortfolioBoxModal;
