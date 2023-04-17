import React, { useEffect } from 'react';
import { useStateContext } from '../../Contexts/ContextProvider';

function ButtonSetMode(props) {
    const {mode,toggleDarklMode} = useStateContext()
    return (
        <div className='absolute bottom-[110px] left-[140px] '>
            <div className='relative'>
                <input type="checkbox" id="toggle_checkbox"
                    onChange={()=> {toggleDarklMode()}}
                    defaultChecked= {mode === 'dark' ? true : false}
                />

                <label htmlFor="toggle_checkbox">
                <div id="star">
                    <div className="star" id="star-1">★</div>
                    <div className="star" id="star-2">★</div>
                </div>
                <div id="moon"></div>
                </label>
            </div>
        </div>
    );
}

export default ButtonSetMode;