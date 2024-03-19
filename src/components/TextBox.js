import { useState } from "react";

export default function TextBox({onSubmit}) {
    const [term, setTerm] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term)
        setTerm("");
    }

    const handleChange = (event)  => {
        setTerm(event.target.value);
    }

    return (
        <div className="text-box">
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}