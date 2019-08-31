/**
* Libraries
*/

import React,{
    Component
} from 'react';

/**
* Components
*/

import Headline from '../Headline/headline';
import XLogo from '../X/xLogo';
import OLogo from '../O/oLogo';

/**
* Styles
*/

import './page1.scss';

/**
* Page1 component definition and export
*/

class Page1 extends Component {

    /**
    * Markup
    */

    render(){
        return(
            <div className="backgroundBox">
                <Headline/>
                <XLogo 
                    left
                    className={"x"}
                />
                <XLogo center/>
                <XLogo className={"xScreen"}/>
                <OLogo 
                    left
                    radius={"50"}
                    width={"230"}
                    height={"230"}
                    strokeWidth={"17"}
                    cx={"115"}
                    cy={"150"}
                />
                <OLogo
                    radius={"35"}
                    width={"150"}
                    height={"160"}
                    strokeWidth={"10"}
                    cx={"50"}
                    cy={"50"}
                />
                <OLogo
                    center
                    radius={"15"}
                    width={"150"}
                    height={"160"}
                    strokeWidth={"7"}
                    cx={"50"}
                    cy={"50"}
                />
            </div>
        );
    }
}

export default Page1;
