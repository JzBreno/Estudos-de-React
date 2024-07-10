// eslint-disable-next-line react/prop-types
const Card = ({imagem, title, category, paragraph, tipo}) => {
    return ( 
        <>
        {/*tudo que tem dentro do return eh jsx, nao se pode colocar if e else
        tudo de conidcionais se deve ser colocado em operador ternario */}
        <div style={{border:"1px solid black"}}>
           
            <img src={imagem} alt={title} />
            <h2>{title}</h2>

            {
                tipo == "A" &&( /* operador ternario que se usa no lugar do if else no jsx, tem opcao && ou ? */
                    <>
                        <h6>{category}</h6>
                        <p>{paragraph}</p>
                    </>
                )
            }
            
        </div>
            
        </>
    );
}
 
export default Card;