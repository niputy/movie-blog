import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QuoteSection(){
    return (
        <div className="section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft} /> Your film is like your children. You might want a child with certain qualities, but you are never going to get the exact specification right. The film has a privilege to live its own life and develop its own character. To suppress this is dangerous. It is an approach that works the other way too: sometimes the footage has amazing qualities that you did not expect.</p>
            <p className="quote-author">- Werner Herzog</p>
        </div>
    )
}