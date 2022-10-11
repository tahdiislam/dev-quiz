import toast, { Toaster } from 'react-hot-toast';

// let toastText;


const QuizOption = ({option, id, setQuizAnswer, quizAnswer, correctAnswer}) =>{
    // toastText = quizAnswer;
    const notify = () => toast(`${quizAnswer === correctAnswer ? "You're done" : "Ops wrong answer!!"}`, {duration:2000,icon: '👏',});
    return(
        <label onClick={notify} className='text-2xl border rounded-xl py-2 px-3 my-1 hover:shadow-lg hover:bg-indigo-200'><input className='h-6 w-6 mr-3' type="radio" name={id} id={id} value={option} onChange={(e)=>setQuizAnswer(e.target.value)}/>{option}<Toaster/></label>
    )
}

export default QuizOption;