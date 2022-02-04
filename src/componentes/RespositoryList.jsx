import { RepositoryItem } from "./RepositoryItem";

const respository = {
    name: 'uniform',
    description: 'Oi eu sou Naruto',
    link: 'https://www.imediacomunicacao.com.br'
}

export function RespositoryList() {
    return (
        <section className="respository-list">
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