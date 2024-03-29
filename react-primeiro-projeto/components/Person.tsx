type Props = {
    name: string;
    avatar: string;
    roles: string[];
    address?: string; //se tiver o ? antes do :, torna opcional o adress
}

export const Person = ({name, avatar, roles}: Props) => {
    // const { name, avatar, roles } = props;
    return (
        <div className='p-3'>
            <h1>Name: {name}</h1>
            <img
                src={avatar}
                alt={name}
                className='w-40'
            />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </div>
    );
}