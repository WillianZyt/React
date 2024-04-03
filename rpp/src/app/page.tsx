import { students } from "@/data/students";
import { Estudantes } from "@/components/Estudantes";

const Page = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white 
    bg-gradient-to-r from-slate-500 to-indigo-500">
      <ul>
      <Estudantes id={0}/>
      <Estudantes id={1}/>
      <Estudantes id={2}/>
      <Estudantes id={3}/>
      <Estudantes id={4}/>
      <Estudantes id={5}/>
      </ul>
    </div>
  );
}
export default Page;
