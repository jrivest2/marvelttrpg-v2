import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VscSearch } from "react-icons/vsc";


function SearchInput() {
    const [term, setTerm] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/search?term=' + term)
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={term} onChange={e => setTerm(e.target.value)} placeholder='Search characters' />
        </form>
    );
}

export default SearchInput;