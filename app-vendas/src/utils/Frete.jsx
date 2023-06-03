import axios from 'axios'
import {React,useCallback, useEffect} from 'react'

const Frete = () => {
    let cep_origem = document.getElementById('cep_origem').value
    let cep_destino = document.getElementById('cep_destino').value
    const comprimento = 14
    const altura = 15
    const largura = 30
    const valor_declarado = 0
    let cod_servico = document.getElementById('cod_servico').value
    const peso = 10
  
    const api = `http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&sCepOrigem=${cep_origem}&sCepDestino=${cep_destino}&nVlPeso=${peso}&nCdFormato=1&nVlComprimento=${comprimento}&nVlAltura=${altura}&nVlLargura=${largura}&sCdMaoPropria=n&nVlValorDeclarado=${valor_declarado}&sCdAvisoRecebimento=n&nCdServico=${cod_servico}&nVlDiametro=0&StrRetorno=xml`

    // const getFrete = useCallback(async()=> {
    //     try{
    //         const {data} = await axios.get(`http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=&sDsSenha=&sCepOrigem=${cep_origem}&sCepDestino=${cep_destino}&nVlPeso=${peso}&nCdFormato=1&nVlComprimento=${comprimento}&nVlAltura=${altura}&nVlLargura=${largura}&sCdMaoPropria=n&nVlValorDeclarado=${valor_declarado}&sCdAvisoRecebimento=n&nCdServico=${cod_servico}&nVlDiametro=0&StrRetorno=xml`)
    //         console.log(data)
    //     } catch(error){
    //         console.log(error)
    //     } 
    // } )

    const getFrete = useCallback(async () => {
        try {

            const { data } = await axios.get(api);
            console.log(data)
        } catch(error) {
            console.log(error)
        } 
    }, [])
      useEffect(() => {
        getFrete(0)
    }, [])

    return(
        getFrete
    )

  }
  
  export default Frete
