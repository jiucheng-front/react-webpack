import React, { Component } from 'react';

//1、test scss
// import "../styles/Toogle.scss";
//2、test less
import "../styles/Toogle.less";
//3 开关切换组件
class Toogle extends React.Component {
    constructor( props ){
        super( props );
        console.log(props)
        this.state={ isSelected : true };
        this.handleToogle = this.handleToogle.bind(this);
    }
    handleToogle(e){
        e.preventDefault()
        let targetElem = e.target
        let index = targetElem.getAttribute("data-index")
        console.log(targetElem,index)
        console.log(this)
        console.log(this.state.isSelected)
        this.setState(prevState => ({
            isSelected: !prevState.isSelected,
        }));
    }
    render(){
        const isSelected=this.state.isSelected
        let str=null
        if(isSelected){
            str="开关打开"
        }else{
            str="开关关闭！"
        }
        return (
            <div className="box">
                <h3 className="title">{this.props.name}</h3>
                <button onClick={ this.handleToogle } data-index="0">
                    { this.state.isSelected ? "on" : "off" }
                </button>
                <p>{ str }</p>
            </div>
        )
    }
}

export default Toogle;