import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import checkImg from '../img/success.svg';
import unCheckImg from '../img/unsuccess.svg';


class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let url = unCheckImg;
        if (item.isComplete){
            url = checkImg
        };
        return <div onClick={onClick} className={classNames('TodoItem', {
            'TodoItem-complete': item.isComplete
        })}>
            <img src={url} width={32} height={32}/>
            <p>{this.props.item.title}</p>
        </div>;
    }
}

export default TodoItem;