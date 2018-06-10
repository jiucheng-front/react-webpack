import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import "../styles/fontstyle.css"


//一、 Components和props,事件处理程序
import Toogle from "./Toogle";

//icon字体列表
import Icon from "./Icon.jsx"

// 二、State 和 生命周期
import Clock from "./Clock.jsx"



// DOC  http://www.css88.com/react/docs/handling-events.html

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/entry.js</code> and save to reload.
				</p>
				<h3 className = "index-title">一、Conmponents(组件)和props(属性),事件处理程序</h3>
				<Toogle data-index = "0" name = "开关按钮" />
				<h3>1.2 Icon字体，JSX</h3>
				<Icon />
				<h3 className = "index-title">二、State(状态)和生命周期</h3>
				<Clock />
			</div>
		);
	}
}

export default App;
