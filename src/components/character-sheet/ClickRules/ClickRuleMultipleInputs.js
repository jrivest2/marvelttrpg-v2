import { useState } from "react";

export default function ClickRuleMultipleInputs({title, titleClass, children}) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const outputTitle = title.slice(2).map((item, index) => <div key={index}>{item}</div>);

    const clickedOuput = <>
        <div className={titleClass}>
            <div onClick={handleClick} >{title[0]}<sup className='clickScript'>i</sup>: {title[1]}</div>
            {outputTitle}
        </div>
        <hr />
        <div>{children}</div>
        <hr />  
    </>

    const defaultOutput = <>
        <div className={titleClass}>
            <div onClick={handleClick}>{title[0]}<sup className='clickScript'>i</sup>: {title[1]}</div>
            {outputTitle}
        </div>
    </>

    return isClicked ? clickedOuput: defaultOutput;
}