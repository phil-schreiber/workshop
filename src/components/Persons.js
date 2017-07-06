import React, {Component} from 'react';

const ICONS = {
    location:"🗺",
    email: "📧",
    phone: "📱"
};

class Persons extends Component{


    render(){
        return(
            <div>
                <h1>{this.props.last}</h1>
                <ul>
                    {Object.keys(ICONS).map((prop,idx) => <Props key={idx} type={prop} value={this.props[prop]}/>)}
                </ul>
            </div>
        )
    }

}

class Props extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            visible:false
        }
    }


    onClick(e) {
        console.log(e);
        this.setState({visible:true});

    }

    render() {


        return (<li onClick={(e)=>this.onClick(e)}>
            <IconElement icon={this.props.type} />
            {
                this.state.visible
                    ? this.props.value
                    : null
            }
        </li>);
    }
}


const IconElement  = ({icon}) => <i>{ICONS[icon]}</i>;

export default Persons;