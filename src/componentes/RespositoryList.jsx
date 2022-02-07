import { useState, useEffect } from 'react/cjs/react.development';
import '../styles/repositories.scss';
import { RepositoryItem } from "./RepositoryItem";



//deletei o const repository que havia aqui , pois agora puxarei as informações da API

export function RespositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
        
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositorios</h1>

            <ul>
                
                {repositories.map(repository => {
                    return <RepositoryItem repository={repository} />
                })}
            </ul>

        </section>
    );
}