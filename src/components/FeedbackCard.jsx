import React from 'react';
import { quotes } from '../assets';

const FeedbackCard = ({content, name, title, img}) => {
  return (
    <section>
        <img src={quotes} alt="double_quotes" />
        <p>
            {content}
        </p>

        <div>
            <img src={img} alt="name" />
            <div>
                <h4>
                    {name}
                </h4>
                <p>
                    {title}
                </p>
            </div>
        </div>
    </section>
  )
}

export default FeedbackCard