import React from "react";
import Rating from "./rating";
import "./Feedback.css";
import _ from "lodash";
const feedbackDetails = [
  {
    id: 1,
    name: "Sonal Patel",
    comment:
      "My reiki session with Vediheal was lovely, The practiser was very welcoming and I felt comfortable with her immediately. She has a good sense of energy and I felt her focussing on areas of me that she felt needed extra attention. I felt very relaxed and rested afterward and a lot lighter the next few days. I would highly recommend Vediheal",
    rating: "5",
  },
  //   {
  //     id: 2,
  //     name: "Parul Shah",
  //     comment:
  //       "Whenever in stress or dilemma about any situation the only solution I find is approaching Vediheal. It has always helped me through Reiki and the healing process. The sessions are, quite accurate, understanding human emotions and advising in a manner that can help effectuate positive changes.",
  //     rating: "5",
  //   },
  //   {
  //     id: 3,
  //     name: "Aashvi Soni",
  //     comment:
  //       "Vediheal is a really genuine reiki healing platform. The teaching, healing, and guidance are really helpful and powerful. All the practitioners treat everyone with personal care and attention. By counseling and healing, They cure many diseases. I highly recommend everyone to take the services provided by Vediheal for any kind of healing Reiki session.",
  //     rating: "5",
  //   },
];

function Feedback() {
  return (
    <div>
      <div className="feedbackContainer">
        {_.map(feedbackDetails, (feedback) => {
          return (
            <div className="feedback">
              <Rating />
              <div className="redText">{feedback.name}</div>
              <div className="comment">{feedback.comment}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Feedback;
