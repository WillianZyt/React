const getWeekDay = () => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date());
}

export const Person = () => {
    const data = {
        name: 'Elon Musk',
        avatar: 'https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-2.jpg',
        roles: ['CEO da Tesla', 'CEO da SpaceX' ]
    }
    const name: string = 'Elon Musk';
    const avatar: string = 'https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-2.jpg';

    return (
        <>
            <h1 style={{ color: 'red', fontSize: '30px' }}>
                Name: {data.name} - {getWeekDay()}
            </h1>
            <img
                src={data.avatar}
                alt={data.name}
                className='w-40'
            />
            <ul>
                <li>{data.roles[0]}</li>
                <li>{data.roles[1]}</li>
                <li>CEO da ...</li>
            </ul>
        </>
    );
}