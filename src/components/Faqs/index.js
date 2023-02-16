import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {isQuestion: false, qId: ''}

  onClickQust = id => {
    this.setState(prevState => ({isQuestion: !prevState.isQuestion, qId: id}))
  }

  render() {
    const {isQuestion, qId} = this.state
    const {faqsList} = this.props
    const newList = faqsList.map(eachone => ({...eachone, question: false}))

    const updatedList = newList.map(eachItem => {
      if (eachItem.id === qId) {
        return {...eachItem, question: isQuestion}
      }
      return eachItem
    })

    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="main-heading">FAQs</h1>
          <ul className="list-items">
            {updatedList.map(eachList => (
              <FaqItem
                eachList={eachList}
                key={eachList.id}
                onClickQust={this.onClickQust}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
