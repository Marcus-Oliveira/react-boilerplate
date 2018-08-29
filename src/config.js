// Arquivo para configurações que sejam úteis para o projeto como um todo
// Por exemplo variáveis de ambiente
// Funções de uso global

// Definiando a URL das apis conforme os ambientes
// dev/localhost, hml ou prod
let definirUrlAPIsConformeAmbinete = () => {
    let environment = process.env.NODE_ENV
    
    //Nesta variável srerão definidos as urls
    //das APIs conforme o ambiente da aplicação

    //Configurar o estado inicial com os endereços de DEV
    let APIs = {
        'api'  : '',
    }

    /**
        Subistituindo os endereços das APIs conforme os ambientes
        Estou utilizando o environment como base. Cada ambiente
        Dev/localhost, hml, e prod possui um environment diferente
        que deverá ser considerado.

        Estou utilizando o spread operator para subistituir ou
        adicionar novos valores.
    */
    switch(environment) {
        case 'development':
            return {
                ...APIs, 
                'api'  : ''
            }
            break
        case 'hml':
            return {
                ...APIs, 
                'api'  : ''
            }
            break
        case 'production':
            return {
                ...APIs, 
                'api'  : ''
            }
            break
        default:
            return {
                ...APIs, 
                'api'  : ''
            }
            break
    }
}

export const urlAPIs = definirUrlAPIsConformeAmbiente()