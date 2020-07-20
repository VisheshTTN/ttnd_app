import React from 'react';
import { connect } from 'react-redux';
import Comments from '../../../Containers/Dashboard/Comments/Comments';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import * as actions from '../../../store/actions/index';

import styles from './BuzzView.module.css';

const BuzzView = (props) => {
    

    return(
        <div key={props.buzz._id} style={{borderBottom: '1px solid #ccc', marginBottom:'50px'}}>
            <div className={styles.BuzzDetails}>
                <div className={styles.Date}>
                    <p><em>{props.buzz.createdOn.slice(8,10)}/</em></p>
                    <p><em>{props.buzz.createdOn.slice(5,7)}</em></p>
                </div>
                <div className={styles.BuzzContent}>
                    <p>{props.buzz.createdBy.email}</p>
                    <div className={styles.ImageBox}>{props.buzz.image.map(image=><div key={image}className={styles.Image}>
                        <img src={require(`../../../server/${image}`)} alt='buzz'/>
                    </div>)}</div>
        
                            
                    <p className={styles.BuzzDescription}>{props.buzz.description}</p>
                </div>
            </div>
            <div className={styles.Action}>
                <button>Comments</button>

                <div className={styles.LikeDislike}>
                <button onClick={props.likeHandler}
                    disabled={props.buzz.likes.includes(props.userID)?true:false}
                    style={{color:`${props.buzz.likes.includes(props.userID)?`#ff0019`:`#808080`}`}}
                >
                    <span>{props.buzz.likes.length}</span>
                    <FaThumbsUp/>
                </button>
                <button onClick={props.dislikeHandler}
                    disabled={props.buzz.dislikes.includes(props.userID)?true:false}
                    style={{color:`${props.buzz.dislikes.includes(props.userID)?`#ff0019`:`#808080`}`}}
                >

                    <span>{props.buzz.dislikes.length}</span>
                    <FaThumbsDown/>
                </button>
                </div>
            </div>    
                        
                <Comments buzzID={props.buzz._id} />
        </div>
    )
}

const mapStateToProps = state => {
    return{
        comments: state.comments.commentsData
    };
}

const mapDispatchToProps = dispatch => {
    return{
        fetchComments: (buzzID) => dispatch( actions.fetchComments(buzzID) )
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( BuzzView );