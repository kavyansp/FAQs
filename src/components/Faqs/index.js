// Write your code here.
import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-list">
          {faqsList.map(eacFaq => (
            <FaqItem key={eacFaq.id} faqDetails={eacFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
