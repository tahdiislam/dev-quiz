const QuizOption = ({option, id, setQuizAnswer}) =>{
    return(
        <label className='text-2xl border rounded-xl py-2 px-3 my-1 hover:shadow-lg hover:bg-indigo-200'><input className='h-6 w-6 mr-3' type="radio" name={id} id={id} value={option} onChange={(e)=>setQuizAnswer(e.target.value)}/>{option}</label>
    )
}

export default QuizOption;