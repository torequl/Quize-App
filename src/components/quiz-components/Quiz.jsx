import { useRef, useState } from "react";
import { data } from "../../assets/data";
import toast from "react-hot-toast";
const Quiz = () => {

    const [index, setIndex] = useState(0);

    const [questions, setQuestions] = useState(data[index]);

    const [lock, setLock] = useState(false);

    const nextQuestion = () => {
        if(index === data.length - 1) {
            return toast.error('You have reached the end of the quiz')
        }
        setIndex(index + 1);
        setQuestions(data[index + 1]);
    };

    const prevQuestion = () => {
        if(index === 0) return toast.error('You have reached the start of the quiz')
        setIndex(index - 1);
        setQuestions(data[index - 1]);
    };

    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
    const option4 = useRef(null);

    const option_arr = [option1, option2, option3, option4];

    const checkAnswer = (e,answer) => {
        if (lock === false) {
            if(answer === questions.ans) {
                e.target.classList.add('bg-green-400');
                toast.success('Correct Answer');
                setLock(true);
            } else {            
                e.target.classList.add('bg-red-400');
                toast.error('Wrong Answer');
                setLock(true);
                option_arr[questions.ans - 1].current.classList.add('bg-green-400');
            }
        }
        
    }

    return (
        <div className="bg-white p-6 rounded-2xl mt-3">
            <h3 className="text-xl ">{index + 1}. {questions.question}</h3>
            <ul className="flex flex-col gap-3 my-4">
                <li ref={option1} onClick={(e)=>{checkAnswer(e,1)}} className="btn btn-outline">{questions.option1}</li>
                <li ref={option2} onClick={(e)=>{checkAnswer(e,2)}} className="btn btn-outline">{questions.option2}</li>
                <li ref={option3} onClick={(e)=>{checkAnswer(e,3)}} className="btn btn-outline">{questions.option3}</li>
                <li ref={option4} onClick={(e)=>{checkAnswer(e,4)}} className="btn btn-outline">{questions.option4}</li>
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
            <p className="mt-4 text-center">{1 + index} of 5 Questions</p>
        </div>
    );
};

export default Quiz;