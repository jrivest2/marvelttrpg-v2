export default function PowerClickBody({power, subPower}) {
    
    const output = Object.entries(power).map((item, index) => {
        const [name, value] = item;
        if (value.length !=0) {
            switch(name) {
                case "name":
                    return <div key={index} className="power-name"><b>{value}</b></div>;
                case "summary":
                    return (<div key={index} className="power-summary"><i>{value}</i></div>);
                case "action": 
                    if (value.length > 1) {
                        let newVal = "";
                        value.forEach(item => {newVal += item + ", "});
                        newVal = newVal.slice(0, newVal.length - 2);
                        return <div key={index} className="power-action"><b>Action Types</b>: {newVal}</div>;
                    }
                    return <div key={index} className="power-action"><b>Action Type</b>: {value}</div>;
                case "trigger": 
                    return <div key={index} className="power-trigger"><b>Trigger</b>: {value}</div>;
                case "duration":
                    return <div key={index} className="power-duration"><b>Duration</b>: {value}</div>;
                case "range":
                    return <div key={index} className="power-range"><b>Range</b>: {value}</div>;
                case "cost":
                    return <div key={index} className="power-cost"><b>Cost</b>: {value}</div>;
                case "effect":
                    const newVal = value.split("\n")
                    const effectOutput = newVal.map((paragraph, index2) => {return <div key={index2}>{paragraph}</div>})
                    return <div key={index} className="power-effect">{effectOutput}</div>;
                case "integrated":
                    switch(value[0]) {
                        case 0:
                            return <div key={index} className="power-integrated">This power's effects have <b>NOT</b> yet been integrated into the website. You will need to keep track of its effects on your own.</div>;
                        case 1:
                            return <div key={index} className="power-integrated">This power's effects have been <b>PARTIALLY</b> integrated into the website. {value[1]}</div>;
                        case 2:
                            return <div key={index} className="power-integrated">This power's effects have yet been integrated into the website. Its effects have been <b>COMPLETELY</b> integrated into the website.</div>
                    }
            }
        }
    })
    
    const passiveNote = (power.duration === "Permanent") ? <div><br /><div className="passive superscript">**Powers Marked in Red are Passive Powers.**</div> <div className="passive superscript">These powers do not have Action Types, but rather, they act as permenant stat buffs.</div></div> : "";

    return (
        <>
            {output}
            {passiveNote}
        </>
    );
}