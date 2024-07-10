import { useRef} from "react";

const Input = () => {

   // const [nome, setNome] = useState("");
    const nome = useRef("")
  

    return ( 
        <>
            <input 
                type="text"
                placeholder="Digite seu Nome: "
                onChange={(e) => nome.current = e.target.value}
            />

            <button onClick={() => console.log(nome.current)}>Mostrar</button>
            <h1>{nome.current}</h1>
        </>
     );
}
 
export default Input;