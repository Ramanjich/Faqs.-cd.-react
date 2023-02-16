import './index.css'

const FaqItem = props => {
  const {eachList, onClickQust} = props
  const {id, questionText, answerText, question} = eachList

  const onBtnClick = () => {
    onClickQust(id)
  }
  console.log(question)

  return (
    <li className="items">
      <div className="question-con">
        <div>
          <h1 className="heading">{questionText}</h1>
        </div>
        <div>
          <button className="button" type="button">
            <img
              src={
                question
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
              }
              alt={question ? 'minus' : 'plus'}
              className="image-style"
              onClick={onBtnClick}
            />
          </button>
        </div>
      </div>
      {question && <p>{answerText}</p>}
    </li>
  )
}
export default FaqItem
