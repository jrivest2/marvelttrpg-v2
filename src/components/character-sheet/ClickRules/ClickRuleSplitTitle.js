import { useState } from "react";

export default function ClickRuleSplitTitle({title, children, titleClassName}) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const clickedOuput = <>
        <div> <text onClick={handleClick} className={titleClassName}>{title[0]}<sup className='clickScript'>i</sup></text>: {title[1]}</div>
        <hr />
        <div>{children}</div>
        <hr />
    </>

    const defaultOutput = <>
        <div> <text onClick={handleClick} className={titleClassName}>{title[0]}<sup className='clickScript'>i</sup></text>: {title[1]}</div>
    </>

    return isClicked ? clickedOuput : defaultOutput;
}