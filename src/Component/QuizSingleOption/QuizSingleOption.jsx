import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { quizContext } from '../QuizArea/QuizArea';

// let toastText;


const QuizOption = ({option, id, correctAnswer}) =>{
    const {handleSetAnswer} = useContext(quizContext)
    const handleSelectQuiz = value => {            
            // console.log('hello world');
            if(value === correctAnswer){
                notify('correct')
                handleSetAnswer(id, 'correct')
            }else{
                notify()
                handleSetAnswer(id)
            }
    }
    const notify = value =>toast(`${ value === 'correct'  ? '👏you are done' : '❌  wrong answer'}`, {duration:700,/* icon: '', */id:`${id}`});
    return(
        <label className='text-2xl border rounded-xl py-2 px-3 my-1 hover:shadow-lg hover:bg-indigo-200'><input className='h-6 w-6 mr-3' type="radio" name={id} id={id} value={option} /* onClick={`${option !== correctAnswer}`} */ onChange={(e)=>handleSelectQuiz(e.target.value)}/>{option}<Toaster toastOptions={{
    className: '',
    style: {
      border: '1px dotted gray',
      padding: '10px 16px',
      color: 'black',
      boxShadow: 'none',
    },
  }}/></label>
    )
}

export default QuizOption;