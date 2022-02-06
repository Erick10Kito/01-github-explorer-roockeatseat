import { useState, useEffect } from 'react/cjs/react.development';
import '../styles/repositories.scss';
import { RepositoryItem } from "./RepositoryItem";



const respository = {
    name: 'uniform',
    description: 'Oi eu sou Naruto',
    link: 'https://www.imediacomunicacao.com.br'
}

export function RespositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
        //fetch foi usado para ir buscar os repositorios na api, e do primeiro .then em diante significa que quando o fetch dar uma resposta , ela vai ser convertida em .json
        //Segundo .then significa que quando a resposta para json terminar de ser convertida , eu terei os dados do repositorio, e usei o useState pois foi feita uma mudança, entao o setRepositories tem o valor data que é o valor puxado pelo fetch
        //Informação adicional: depois que o 'repositorie' passar da função , ele tera o valor de 'setRepositories' , pois o useState foi usado para isso, antes ele era um array vazio
        //Informação adicional: lembrando que quando uma informação do State muda, o react basicamente recarrega todo o componente , seguindo assim o conceito da imutabilidade , e isso foi usado no exemplo acima, no qual o setRepositories foi um novo componente de repositories
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositorios</h1>

            <ul>
                <RepositoryItem repository={respository} />
                <RepositoryItem repository={respository} />
                <RepositoryItem repository={respository} />
                <RepositoryItem repository={respository} />
            </ul>

        </section>
    );
}