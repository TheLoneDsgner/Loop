import './TextField.modules.css'

const TextField = ( {label, bottomText, placeholder, addItemBtn, value, onChange, isError, errorMessage } ) => {
    return ( 
        <div className="text-field">
            
            <label className='label_text-field'>{label}</label>

            <div className="input-group">
                <input 
                    type="text" 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChange}
                    className={isError ? 'input-error' : ''} // Apply error class
                />
                {addItemBtn}
            </div>

            {isError && errorMessage && <span className="error-message">{errorMessage}</span>} {/* Display error message */}
            <span className="bottom-text">{bottomText}</span>         
        </div>
     );
}
 
export default TextField;

