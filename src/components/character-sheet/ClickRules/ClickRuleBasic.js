import { useState } from "react";

export default function ClickRuleBasic({title, titleClass, children}) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const clickedOuput = <>
        <div onClick={handleClick} className={titleClass}>{title}<sup className='clickScript'>i</sup></div>
        <hr />
        <div className="basic-actions-rule">{children}</div>
        <hr />
    </>
    const defaultOutput = <><div onClick={handleClick} className={titleClass}>{title}<sup className='clickScript'>i</sup></div></>

    return isClicked ? clickedOuput : defaultOutput;

}