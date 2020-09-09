import React, {useReducer, useEffect} from 'react';
import Repository from './RepositoryComponent';
import Loading from './LoadingComponent';
import Error from './ErrorComponent';

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

    useEffect(()=>{
        fetch(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${match.params.npage}`)
        .then(res=>{
            if(res.ok) return res.json()
            else throw new Error("Problem in the server")
        })
        .then(data=> dispatch({type:"FETCH_SUCCESS", payload:data.items}) )
        .catch(err=> dispatch({type:"FETCH_ERROR"}) );
    },[state.loading,match.params.npage]);

    

    const RenderItems=()=>{
        if(state.loading){
            return <Loading />;
        }
        else if(state.error){
            return <Error />;
        }
        else{
            const renderItems=state.items.map(item=>
                <Repository title={item.name} description={item.description} image={""} 
                        stars={item.stargazers_count} issues={item.open_issues} time={item.created_at} />
            );
            return(
                <div className="row">
                    <div className="col">
                        {renderItems}   
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