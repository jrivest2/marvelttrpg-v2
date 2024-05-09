import { useState } from "react";

export default function ClickRuleSplitTitlePartialClick({title, children, titleClass}) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const clickedOuput = <>
        <div><text onClick={handleClick} className={titleClass} style={{"marginRight": "10px"}}>{title[0]}<sup className='clickScript'>i</sup></text> {title[1]}</div>
        <hr />
        <div>{children}</div>
        <hr />
    </>

    const defaultOutput = <>
        <div><text onClick={handleClick} className={titleClass} style={{"marginRight": "10px"}}>{title[0]}<sup className='clickScript'>i</sup></text> {title[1]}</div>
    </>

    return isClicked ? clickedOuput : defaultOutput;
}