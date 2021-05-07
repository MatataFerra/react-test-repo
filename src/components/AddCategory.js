import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Escribe una búsqueda');
    
    const handleInputChange = ( e ) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length > 2) {
            setCategories(oldCategorie => [inputValue, ...oldCategorie])
            setInputValue('')
        }
    }

    const handleFocus = (e) => {
        setInputValue(e.target.value = '')
    }


    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input 
                    type='text'
                    value= { inputValue }
                    onChange={ handleInputChange }
                    onFocus= {handleFocus}
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
