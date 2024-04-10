import { questionList } from "@/data/questionList"
import { Question } from "@/types/Question"
import { useState } from "react"

type Props = {
  questions: Question[]
}
export const QuizQuestion = () => {
  const [answerCorrect, setAnswerCorrect] = useState(false)

  const handleClickBtn = () => {
    const q = questionList.map(item => item.answerOptions[1])
    if (q === questionList.) {
      setAnswerCorrect(true)
    }

  }
  return (
    <div className="">

      <div>{questionList.map(item => (
        <div className="flex flex-col items-center justify-center rounded-md">
          <h1 className="p-3 text-bold">QUIZ</h1>
          <section className="font-bold flex flex-col p-3 rounded-md text-black bg-gray-400">

            <h1 className="px-12 rounded-md border border-black font-bold text-black text-2xl bg-orange-400">{item.questionText}</h1>

            <button className="my-1 rounded-md border border-black" onClick={handleClickBtn}>A. {item.answerOptions[0]}</button>
            <button className="my-1 rounded-md border border-black" onClick={handleClickBtn}>B. {item.answerOptions[1]}</button>
            <button className="my-1 rounded-md border border-black" onClick={handleClickBtn}>C. {item.answerOptions[2]}</button>
            <button className="my-1 rounded-md border border-black" onClick={handleClickBtn}>D. {item.answerOptions[3]}</button>

          </section>
        </div>
      ))}
      </div>
    </div>
  )
} 