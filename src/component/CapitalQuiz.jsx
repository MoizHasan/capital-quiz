import React, {useState} from "react";

const CapitalQuiz = ({countryData}) => {
    // set country data
    const countries = Object.keys(countryData);
    const capitals = Object.values(countryData);
    const [selected, setSelected] = useState();
    const [options, setOptions] = useState(
        [...countries, ...capitals]
        .sort(() => Math.random() - 0.5)
        .map((c) => ({
            value: c, 
            state: 'default'
        }))
    );
    const colorMap = {default : 'white', selected : 'green', incorrect : 'red'}

    const handleClick = (value) => {
        let capital = '';
        let country = '';
        // iniatilize if empty, otherwise check for match
        setOptions([...options.map(o => {
            return o.value === value ? {value: o.value, state: 'selected'} : {value: o.value, state: o.state}
        })]);
        if (!selected) {
            setSelected(value);
            // update country data to be selected
        } else {
            // we have 2 selections, check if country
            if (countries.includes(selected)) {
                country = selected;
            } else if (countries.includes(value)) {
                country = value;
            }
            // check for capital
            if (capitals.includes(selected)) {
                capital = selected;
            } else {
                capital = value;
            }
            // check if correct otherwise mark wrong
            let isCorrect = countryData[country] === capital;
            console.log(isCorrect);
            // remove from list
            if (isCorrect) {
            setOptions([...options.filter(o => {
                return (o.value !== value && o.value !== selected);
            })]);
            }
            if (!isCorrect) {
                setOptions([...options.map(o => {
                    return (o.value === value || o.value === selected) ? {value: o.value, state: 'incorrect'} : {value: o.value, state: o.state}
                })]);
            }
            // reset selection
            setSelected(null);
        }
    }

    return (
        <>
        <div>
        {options.map((c, key) => {
            return <button key={key} style={{backgroundColor: colorMap[c.state]}} onClick={() => handleClick(c.value)}>{c.value}</button>    
        })}
        </div>
        </>
    )
};

export default CapitalQuiz;