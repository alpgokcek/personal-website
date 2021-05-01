import React, {Component} from 'react';

import {Button, ListGroup, ListGroupItem, Collapse} from 'reactstrap';



class TreeView extends Component {
    state = {};
    toggle = event => {
        const id = event.target.getAttribute('id');
        this.setState(state => ({[id]: !state[id]}));
    };
    mapper = (nodes, parentId, lvl) => {
        return nodes.map((node, index) => {
            const id = `${node.text}-${parentId ? parentId : 'top'}`.replace(/[^a-zA-Z0-9-_]/g, '');
            const item = <React.Fragment key={index}>
            <ListGroupItem style={{zIndex: 0}} className={`${parentId ? `rounded-0 ${lvl ? 'border-bottom-0' : ''}` : ''}`}>
                {<div id={id} onClick={this.toggle} style={{paddingLeft: `${25 * lvl}px`}}>
                    {node.nodes && <Button className="pl-0 color-filter" color="link" id={id}>{this.state[id] ? '-' : '+'}</Button>}
                    <span dangerouslySetInnerHTML={{ __html: node.text }}/>
                </div>}
            </ListGroupItem>
                {node.nodes &&
                <Collapse isOpen={this.state[id]}>
                    {this.mapper(node.nodes, id, (lvl || 0) + 1)}
                </Collapse>}
            </React.Fragment>

            return item;
        });
    }

    render() {
        return (
            <ListGroup>
                {this.mapper(this.props.tree)}
            </ListGroup>
        )
    }
}

export default TreeView;
