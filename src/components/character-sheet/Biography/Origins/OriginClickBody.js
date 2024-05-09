export default function OriginClickBody({origin}) {
    const output = Object.entries(origin).map((item, index) => {
        const [name, value] = item;
        if (value.length != 0) {
            switch(name) {
                case "name":
                    return <div key={index} className="origin-name"><b>{value}</b></div>
                case "description":
                    const newVal = value.split("\n")
                    const descriptionOutput = newVal.map((paragraph, index2) => {return <div key={index2} style={{marginTop: "10px"}}>{paragraph}</div>})
                    return <div key={index} className="origin-description">{descriptionOutput}</div>
                case "examples":
                    return <div key={index} className="origin-examples"><b>Examples</b>: {value}</div>
                case "traits":
                    let traitsTemp = ""
                    value.forEach((trait) => {
                        if (typeof(trait) === "string") traitsTemp += trait + ", ";
                        else traitsTemp += trait[0] + ": " + trait[1] + ", ";
                    });
                    const traitsOutput = traitsTemp.substring(0,traitsTemp.length-2);
                    return <div key={index} className="origin-traits"><b>Traits</b>: {traitsOutput}</div>;
                case "tags":
                    let tagsTemp = ""
                    value.forEach((tag) => {
                        if (typeof(tag) === "string") tagsTemp += tag + ", ";
                        else tagsTemp += tag[0] + ": " + tag[1] + ", ";
                    });
                    const tagsOutput = tagsTemp.substring(0,tagsTemp.length-2);
                    return <div key={index} className="origin-tags"><b>Tags</b>: {tagsOutput}</div>;
            }
        }
    });

    return (
        <>
            {output}
        </>
    );
}