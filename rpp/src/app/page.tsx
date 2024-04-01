// import { GeoForm } from '../../components/GeoForm';

import { peopleList } from "@/data/peopleList";

const Page = () => {

  const chemists = peopleList.filter(person => person.profession === 'chemist')

  return (
    <div>
      <h1 className='font-bold text-2xl'>Olá mundo</h1>
      <h3>Algum outro texto</h3>

      {chemists.length > 0 &&
        <>
          <h3>Lista de químicos</h3>
          <ul>
            {chemists.map(person =>
              <li key={person.id}>{person.name}</li>)}
          </ul>
        </>
      }

    </div>
  );
}

export default Page;
// componentes -> geralmente inicia letra maiuscula
// return () -> components, retorna apenas um elemento, para mais, usar div dentro do return()
// Export default -> usado ,de preferencia ,apenas para a propria Page
// No 'import default', pode atribuir qulquer nome na const
// <img /> -> tudo precisa fechar, sempre com o />
// <> </> -> fragment, se nao usar a div
// com o uso de {}, pode-se usar JS, como variaveis e funções
// props -> para componente, dados, ex: person, com name, avatar, roles