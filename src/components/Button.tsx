import "../styles/components/button.css";

interface Props{

text:string;

variant?:"gold"|"outline";

}

export default function Button({

text,

variant="gold"

}:Props){

return(

<button

className={`primary-btn ${variant}`}

>

{text}

</button>

);

}