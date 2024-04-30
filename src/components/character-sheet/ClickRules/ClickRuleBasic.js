import { useState } from "react";

export default function ClickRuleBasic({title, children}) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const clickedOuput = <>
        <div onClick={handleClick}>{title}<sup className='clickScript'>i</sup></div>
        <hr />
        <div className="basic-actions-rule">{children}</div>
        <hr />
    </>
    const defaultOutput = <><div onClick={handleClick}>{title}<sup className='clickScript'>i</sup></div></>

    return isClicked ? clickedOuput : defaultOutput;

}