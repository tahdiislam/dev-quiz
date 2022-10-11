import toast, { Toaster } from 'react-hot-toast';

// let toastText;


const QuizOption = ({option, id, setQuizAnswer, quizAnswer, correctAnswer}) =>{
    const handleSelectQuiz = value => {            
            setQuizAnswer(value)
            // console.log('hello world');
            if(value === correctAnswer){
                notify('correct')
            }else{
                notify()
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