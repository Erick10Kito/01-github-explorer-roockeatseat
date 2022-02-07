import { useState, useEffect } from 'react';
import '../styles/repositories.scss';
import { RepositoryItem } from "./RepositoryItem";



//deletei o const repository que havia aqui , pois agora puxarei as informações da API

interface Repository {
    name: string;
    description: string;
    html_url: string;
}
//Array de repositorios no formato da interface

export function RespositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    //coloquei o sinal de maior e menor pois e dentro desses sinais que eu vou definir o tipo do estado, coloquei colchetes depois do Repository(nome dado para a interface) para falar que é uma lista, se nao tivesse colocado ele terie entendido que seria soemente um repositorio

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
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>

        </section>
    );
}

//Informação adicional: toda vez que eu faço um map no html eu preciso informar para o react atraves de uma propriedade que o próprio react cria e que se chama key, qual é a informação unica de cada repositorio, e como nessa situação não é possivel ter um repositorio com nome repetido, eu posso colocar o nome como esse tipo de propriedade unica, mas colocar essa key somente no primeiro elemento que vem dentro do map
