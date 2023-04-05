import React from "react";
import { StyledEngineProvider } from '@mui/material/styles';

import { Container} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Switch,Route,Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import { Auth } from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
    <StyledEngineProvider injectFirst>
    <Container maxidth="xl">
      <Navbar/>
      <Switch>
      <Route path="/" exact component={()=><Redirect to="/posts"/>}/>
      <Route path="/posts" exact component={Home}/>
      <Route path="/posts/search" exact component={Home}/>
      <Route path="/posts/:id" component={PostDetails }/>
      <Route path="/auth" exact component={()=>{
        if(user){
          return <Redirect to ='/posts'/>
        }
       return <Auth/>
       
      }
     }/>
      
      </Switch>
    </Container>
    </StyledEngineProvider>
    </BrowserRouter>
  );
};
export default App;




