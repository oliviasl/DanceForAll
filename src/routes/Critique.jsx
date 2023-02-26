import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import './WatchCritique.css';
import StudentVideo from "../assets/student.mov";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/InsertCommentOutlined';
import SendIcon from '@mui/icons-material/SendOutlined';
import Comment from '../components/Comment';

const StyledButton = styled(Button)({
    color: 'black',
    fontSize: '24px',
    marginTop: '95px',
    marginLeft: '10px',
});

const TimestampTextField = styled(TextField)({
    backgroundColor: '#cbdbbf',
    marginTop: '3vh',
});

const CommentTextField = styled(TextField)({
    width: '100%',
    marginTop: '2vh',
});

const StyledCommentIcon = styled(CommentIcon)({
    color: 'black',
    width: '48px',
    height: '48px',
    marginTop: '-50px',
    marginRight: '20px',
});

const StyledSendIcon = styled(SendIcon)({
    color: 'black',
    width: '48px',
    height: '48px',
});

const commentDefault = {
    timestamp: "",
    comment: "",
}


const Critique = () => {
    const [comments, setComments] = useState([]);
    const [updateVar, setUpdateVar] = useState(1);
    const [commentValues, setCommentValues] = useState(commentDefault);

    const createComment = () => {
        if (commentValues.timestamp === "" || commentValues.comment === ""){
            return;
        }
        let newComments = comments;
        newComments.push({
            timestamp: commentValues.timestamp,
            comment: commentValues.comment,
        });
        setComments(newComments);
        setUpdateVar(updateVar + 1);
        setCommentValues({
            timestamp: "",
            comment: "",
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCommentValues({
          ...commentValues,
          [name]: value,
        });
    };

    return (
        <div>
            <Navbar />
            <div className="watch-flex">
                <div className="watch-info-container">
                    <h1 className="watch-h1">Critique</h1>
                </div>
                <video src={StudentVideo} width="1000px" height="600px" controls="controls" autoPlay={false}></video>
            
                <div className="watch-info-container">
                    <div className="watch-spaced-flex">
                        <h2 className="watch-h2">Breaking</h2>
                    </div>
                    <div className="watch-hori-flex">
                        <h6 className="watch-h6-green">Student</h6>
                        <h6 className="watch-h6">Olivia Lai</h6>
                    </div>
                    <div className="watch-hori-flex">
                        <h6 className="watch-h6-green">Difficulty</h6>
                        <h6 className="watch-h6">Medium</h6>
                    </div>
                </div>

                <div className="watch-info-container">
                    <h5 className="watch-h5">
                        Questions and Desired Feedback
                    </h5>
                    <p className="watch-p-questions">
                        I want to know if the breaking looks stiff. How do I improve my flow?
                    </p>
                    <h5 className="watch-h5">
                        Feedback:
                    </h5>
                    <div>
                        {
                            comments.map(currComment => (
                                <Comment key={currComment.timestamp} commentInfo={currComment}></Comment>
                            ))
                        }
                    </div>
                    <div className="watch-hori-flex">
                        <StyledCommentIcon />
                        <div className="watch-info-container">
                            <TimestampTextField name="timestamp" value={commentValues.timestamp} onChange={handleInputChange} id="filled-basic" label="Timestamp" variant="filled" InputProps={{ disableUnderline: true }}/>
                            <CommentTextField name="comment" value={commentValues.comment} onChange={handleInputChange} id="filled-basic" label="Comment..." variant="filled" InputProps={{ disableUnderline: true }}/>
                        </div>
                        <StyledButton onClick={createComment}>
                            <StyledSendIcon />
                        </StyledButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Critique;