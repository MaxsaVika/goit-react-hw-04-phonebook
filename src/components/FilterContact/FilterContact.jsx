import React from "react";
import PropTypes from 'prop-types';
import css from './FilterContact.module.css'

export const FilterContact = ({filter, onChange})=> {
    return (
        <div>
            <label className={css.find_label} htmlFor="filter"> Find contacts by name</label>
            <input
            id = "filter"
            className={css.find_input} 
            type = "text" 
            placeholder="Name" 
            value={filter}
            name ="filter"
            onChange={onChange}
            >
            </input>
        </div>
    )
}

FilterContact.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
};