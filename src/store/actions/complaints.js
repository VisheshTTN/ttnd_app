import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchComplaintsSuccess = ( complaintsData ) => {
    return{
        type: actionTypes.FETCH_COMPLAINTS_SUCCESS,
        complaintsData: complaintsData
    };
};



export const fetchComplaints = ( category ) => {
    return dispatch => {
        axios.get(`http://localhost:5000/complaint?category=${category}`)
            .then(res=>{
                let complaintsArray = [];
                for(let i in res.data){
                    complaintsArray.push({
                        ...res.data[i]
                    })
                }
                dispatch( fetchComplaintsSuccess(complaintsArray) )
            });
    }
}

export const fetchComplaintsByUserSuccess = ( complaintsData ) => {
    return{
        type: actionTypes.FETCH_COMPLAINTS_BYUSER_SUCCESS,
        complaintsData: complaintsData
    };
};


export const fetchComplaintsByUser = (email, category) => {
    return dispatch => {
        axios.get(`http://localhost:5000/complaint/${email}?category=${category}`)
            .then(res=>{
                let complaintsArray = [];
                for(let i in res.data){
                    complaintsArray.push({
                        ...res.data[i]
                    })
                }
                dispatch( fetchComplaintsByUserSuccess(complaintsArray) )
            });
    };
};

export const fetchAssignedComplaintsSuccess = ( complaintsData ) => {
    return{
        type: actionTypes.FETCH_ASSIGNED_COMPLAINTS_SUCCESS,
        complaintsData: complaintsData
    };
};

export const fetchAssignedComplaints = ( admin ) => {
    return dispatch => {
        axios.get(`http://localhost:5000/complaint/assigned/${admin}`)
            .then(res=>{
                let complaintsArray = [];
                for(let i in res.data){
                    complaintsArray.push({
                        ...res.data[i]
                    })
                }
                console.log(res);
                dispatch( fetchAssignedComplaintsSuccess(complaintsArray) )
            });
    }
}