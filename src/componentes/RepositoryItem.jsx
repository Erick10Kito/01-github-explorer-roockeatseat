export function RepositoryItem(props) {

    return (
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository?.description ?? 'Oi eu sou Goku'}</p>


            <a href={props.repository?.link ?? 'https://www.youtube.com/watch?v=mWa4JDzPHsM&list=PL51L1NeBqyMDMwbFGqClrPWLot6kVZMHR&index=81'} target='_blank'>
                Acessar Repositorio
            </a>
        </li>
    )
}