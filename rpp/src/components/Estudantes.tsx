import { students } from "@/data/students";

type Props = {
    id: number;
}

export const Estudantes = ({ id }: Props) => {
    const aluno = students[id]
    const media = (aluno.grade1 + aluno.grade2) / 2
    const atvOrNot = aluno.active ? 'ATIVO' : 'INATIVO'
    return (
        <ul>
            <li className="text-2xl italic">{aluno.name}</li>
            <li>{aluno.email}</li>
            <img className="h-10 rounded-full" src={aluno.avatar} alt=""/>
            <li>{atvOrNot}</li>
            <li>{aluno.grade1}</li>
            <li>{aluno.grade2}</li>
            <li>{media.toFixed(1)}</li>
        </ul>
    );
}