import React from "react"

class Lists extends React.Component {
    constructor(props) {
        super(props)
        this.list = [{ id: 1, text: "React" }, { id: 2, text: "Redux" }]
    }
    render() {
        let strUl = (
            <ul>
                {this.list.map((item) =>
                    <li key={item.id}>
                        {item.text}
                    </li>
                )}
            </ul>
        )
        return (
            <div className="lists-keys-wrap">
                {strUl}
            </div>
        )
    }
}

module.exports = Lists