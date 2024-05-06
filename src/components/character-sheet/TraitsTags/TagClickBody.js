export default function TagClickBody({tag}) {
    const output = Object.entries(tag).map((item, index) => {
        const [name, value] = item;
        if (value.length != 0) {
            switch(name) {
                case "name":
                    return <div key={index} className="tag-name"><b>{value}</b></div>
                case "description":
                    const newVal = value.split("\n")
                    const descriptionOutput = newVal.map((paragraph, index2) => {return <div key={index2} style={{"marginTop": "10px"}}>{paragraph}</div>});
                    return <div key={index} className="tag-description">{descriptionOutput}</div>
                case "restriction":
                    return <div key={index} className="tag-restriction"><b>Restriction</b>: {value}</div>;
                case "integrated":
                    switch(value[0]) {
                        case 0:
                            return <div key={index} className="tag-integrated">This tag's effects have <b>NOT</b> yet been integrated into the website. You will need to keep track of its effects on your own.</div>;
                        case 1:
                            return <div key={index} className="tag-integrated">This tag's effects have been <b>PARTIALLY</b> integrated into the website. {value[1]}</div>;
                        case 2:
                            return <div key={index} className="tag-integrated">This tag's effects have yet been <b>COMPLETELY</b> integrated into the website.</div>;

                    }
            }
        }
    });

    return <>
        {output}
    </>
}