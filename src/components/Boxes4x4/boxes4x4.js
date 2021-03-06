
/**
* Libraries
*/

import React,{
    Component
} from 'react';

/**
* Styles
*/

import './boxes4x4.scss';

/**
* Boxes4x4 component definition and export
*/

class Boxes4x4 extends Component {

    /**
    * Constructor
    */

    constructor(props){
        super(props);
        this.select = React.createRef();
    }

    /**
    * Methods
    */

    evaluateCenter = () => {
        const rect = this.select.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const top = rect.top;
        const left = rect.left;
        const centerX = left + width/2;
        const centerY = top + height/2;
        this.props.centerXY(centerX, centerY)
    }
   
    componentDidMount = () => {
        this.evaluateCenter()
        window.addEventListener('resize', this.evaluateCenter);
    }

    renderInnerBoxes = () => {
        return(
            <div 
                ref={this.select}
                className={this.props.number}
                onClick={this.props.onClick}
            >
              {this.props.children}
            </div>
        );
    }

    /**
    * Markup
    */

    render(){
        return(
            <div>
                {this.renderInnerBoxes()}
            </div>
        );
    }
}

export default Boxes4x4;
