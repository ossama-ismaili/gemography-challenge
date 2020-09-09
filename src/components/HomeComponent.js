import React, {useReducer, useEffect, useState} from 'react';
import Repository from './RepositoryComponent';
import Loading from './LoadingComponent';
import Error from './ErrorComponent';
import { Button } from 'reactstrap';

const initialState={
    loading:true,
    items:[],
    error:""
}

const reducer=(state, action)=>{
    switch(action.type){
        case "FETCH_SUCCESS":
            return{
                loading:false,
                items:action.payload,
                error:""
            };

        case "FETCH_ERROR": 
            return{
                loading:false,
                items:[],
                error:"Something went wrong"
            };

        default:
            return state;    
    }
}

function Home({match}) {
    const [state, dispatch]=useReducer(reducer,initialState);
    const [show, setShow]= useState(6);
    const [btnState, setBtnState]=useState("block");

    useEffect(()=>{
        fetch(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${match.params.npage}`)
        .then(res=>{
            if(res.ok) return res.json()
            else throw new Error("Problem in the server")
        })
        .then(data=> dispatch({type:"FETCH_SUCCESS", payload:data.items}) )
        .catch(err=> dispatch({type:"FETCH_ERROR"}) );
    },[state.loading,match.params.npage]);

    const onShowMore=()=>{
        if(show+6 >= state.items.length){
            setShow(state.items.length);
            setBtnState("none");
        }
        else{
            setShow(show+6);
        }
    }
    

    const RenderItems=()=>{
        if(state.loading){
            return <Loading />;
        }
        else if(state.error){
            return <Error />;
        }
        else{
            const renderItems=state.items.slice(0,show).map(item=>
                <Repository key={item.id} title={item.name} description={item.description} image={""} 
                        stars={item.stargazers_count} issues={item.open_issues} time={item.created_at} />
            );
            return(
                <div className="row">
                    <div className="col">
                        {renderItems} 
                        <div className="row">
                            <Button style={{display:btnState}} color="primary" className="col-md-4 mx-auto" onClick={()=>onShowMore()}>Show More</Button>  
                        </div>
                    </div>
                </div>
            );
        }
    }

    return(
        <div className="App-home">
            <div className="container">
                <RenderItems />
            </div>
        </div>
    );
}

export default Home;