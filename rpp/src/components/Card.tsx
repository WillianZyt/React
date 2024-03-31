type Props ={
    children: string;
}

export const Card = ({ children}: Props) =>{
    return(
        <div className="border-2 border-red-600 p-3 text-3xl text-center">
            {children}
        </div>
    );
}