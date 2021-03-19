import Image from 'next/image';


const { useRef } = require("react");
function TextInputWithFocus(){
    const inputEl = useRef(null);
    const onHandleClick =()=>{
        // console.log(inputEl.current.value);
        inputEl.current.value=12312;
        inputEl.current.focus();
    }

    return(
        <>
        <div  className="full-height">
            {/* <input ref={inputEl} type="text"/>
            <button onClick={onHandleClick}>Focust the input</button>
            <br/>
            <div className="full-height">
                abcd lore
            </div>
            */}
            asdasd
        </div>
        <div  style={{height:"100%", backgroundColor:"indigo"}}>asdsd</div>
        </>
    )
}

export default TextInputWithFocus; 