import './TextField.modules.css'

const TextField = ( {label, bottomText, placeholder, addItemBtn, value, onChange } ) => {
    return ( 
        <div className="text-field">
            
            <label className='label_text-field' htmlFor="input">{label}</label>

            <div className="input-group">
                <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
                {addItemBtn}
            </div>

            <span className="bottom-text">{bottomText}</span>         
        </div>
     );
}
 
export default TextField;

