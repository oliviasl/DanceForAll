import React from "react";
import './Comment.css';
import InstructorImg from '../assets/instructor.jpeg';


const Comment = ({commentInfo}) => {
    return (
        <div className="comment-flex">
            <div>
                <img className="comment-pic" src={InstructorImg}/>
                <h6 className="comment-name">Jaelin</h6>
            </div>
            <div className="comment-text">
                <p className="comment-timestamp">Timestamp: {commentInfo.timestamp}</p>
                <p className="comment-comment">{commentInfo.comment}</p>
            </div>
        </div>
    )
}

export default Comment;