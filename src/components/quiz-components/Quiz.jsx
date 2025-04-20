import { useRef, useState } from "react";
import { data } from "../../assets/data";
import toast from "react-hot-toast";
import "./Quiz.css"
const Quiz = () => {

    const [index, setIndex] = useState(0);

    const [questions, setQuestions] = useState(data[index]);

    const [lock, setLock] = useState(false);

    const [score, setScore] = useState(0)

    const [result, setResult] = useState(false)

    const nextQuestion = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true)
                return
            }
            setIndex(index + 1);
            setQuestions(data[index + 1]);
            setLock(false)
            option_arr.map(o => {
                o.current.classList.remove('correct')
                o.current.classList.remove('wrong')
                return null
            })
        }
    };

    const prevQuestion = () => {
        if (index === 0) return toast.error('You have reached the start of the quiz')
        setIndex(index - 1);
        setQuestions(data[index - 1]);
    };

    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
    const option4 = useRef(null);

    const option_arr = [option1, option2, option3, option4];

    const checkAnswer = (e, answer) => {
        if (lock === false) {
            if (answer === questions.ans) {
                e.target.classList.add('correct');
                toast.success('Correct Answer');
                setLock(true);
                setScore(prev => prev + 1)
            } else {
                e.target.classList.add('wrong');
                toast.error('Wrong Answer');
                setLock(true);
                option_arr[questions.ans - 1].current.classList.add('correct');
            }
        }

    }

    return (
        <div className="bg-white w-11/12 lg:w-80 p-6 rounded-2xl mt-3">
            {result ?
                <>
                    <div className="h-[50vh] w-full flex gap-6 flex-col justify-center items-center">
                            <h3 className="text-4xl font-bold text-blue-500">Your Score</h3>
                        <div className="bg-blue-600 text-center grid place-items-center w-28 h-28 rounded-full">
                            <p className="text-4xl font-bold text-white">{score}/{data.length}</p>
                        </div>

                    </div>
                    <p className="text-center">Made by <a href="https://www.facebook.com/toriqulmkt"><span className="underline text-blue-600 font-bold">TOREQUL</span></a></p>
                </> :
                <>
                    <h3 className="text-xl ">{index + 1}. {questions.question}</h3>
                    <ul className="flex flex-col gap-3 my-4">
                        <li ref={option1} onClick={(e) => { checkAnswer(e, 1) }} className="btn btn-outline">{questions.option1}</li>
                        <li ref={option2} onClick={(e) => { checkAnswer(e, 2) }} className="btn btn-outline">{questions.option2}</li>
                        <li ref={option3} onClick={(e) => { checkAnswer(e, 3) }} className="btn btn-outline">{questions.option3}</li>
                        <li ref={option4} onClick={(e) => { checkAnswer(e, 4) }} className="btn btn-outline">{questions.option4}</li>
                    </ul>
                    <div className="flex justify-between">
                        <button
                            onClick={prevQuestion}
                            className="btn btn-primary">
                            Previous
                        </button>
                        <button
                            onClick={nextQuestion}
                            className="btn btn-secondary">Next</button>
                    </div>
                    <p className="mt-4 text-center">{1 + index} of {data.length} Questions</p>
                </>}

        </div>
    );
};

export default Quiz;