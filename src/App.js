import React,{ useState } from 'react';
import Axios from "axios";
import styled from 'styled-components';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import MainHeader from './Components/headerComponent';
import MainRecepieComp from './Components/recepieComponent';


const APP_ID ="8363cdc5";
const APP_KEY="8761a3a1787bafaf59e3e68372fa6e10";

//A contanier to reflect 
const Container =styled.div`
display: flex;
flex-direction: column;
`;
//Overall component for the entire recepies
const RecipeListContainer= styled.div`
display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 20px;
  justify-content: space-evenly;
`;
const PlaceholderDivision= styled.div`
display:flex;
flex-direction: column;
align-items:center;
`;

const Placeholder= styled.img`
 height:120px;
 width:120px;
 margin:200px;
 opacity:50%;
`;

const TextBelow=styled.div`
color:red;
font-size:16px;
`;


//Component function for rendering the recepie
const RecepieComponent=(props)=> {
  //state to check whether dialog box is open or not
  const[show,setShow]=useState(false);
  //Destructuring the recepie object to props, so that rewriting can be stopped.
  const {recepieObj}=props;
  return (
  <>
  <Dialog open={show}>
  <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
  <DialogContent>
    <table>
      <thead>
        <th>Item needed</th>
        <th>Weight</th>
      </thead>
      <tbody>
      {recepieObj.ingredients.map((ingredientObj)=>(<tr>
          <td>{ingredientObj.text}</td>
          <td>{ingredientObj.weight} Grams</td>
        </tr>))}
      </tbody>
    </table>
  </DialogContent>
  <DialogActions>
          <MainRecepieComp.SeeNewTab onClick={()=>window.open(recepieObj.url)}>SeeMore</MainRecepieComp.SeeNewTab>
          <MainRecepieComp.SeeMoreText onClick={()=>setShow("")}>Close</MainRecepieComp.SeeMoreText>
        </DialogActions>
    
  </Dialog>
  <MainRecepieComp.RecipeContainer>
      <MainRecepieComp.CoverImage src={recepieObj.image} />
      <MainRecepieComp.RecipeName>{recepieObj.label}</MainRecepieComp.RecipeName>
      <MainRecepieComp.IngredientsText onClick={() => setShow(true)}>Ingrediets</MainRecepieComp.IngredientsText>
      <MainRecepieComp.SeeMoreText onClick={() => window.open(recepieObj.url)}>SeeMore</MainRecepieComp.SeeMoreText>
    </MainRecepieComp.RecipeContainer>
    </>
    );
};

function App() {
  const [timeoutId,updateTimeoutId] = useState();
  //Hooks to update the recepies after searching
  const [recepieList,updateRecepieList] = useState([]);
  //Hooks to set timeout for search 
  //Axios helps us to get the relevant data throught the API
  const fetchRecipe= async(searchString)=>{
    //backticks for the template literals
    //setting the response into the variable response
    const response= await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}&&health=alcohol-free`
);
updateRecepieList(response.data.hits);
  }

  //Takes a pause for 1000ms and then calls the API
  //debouncing concept
  const OnTextChange=(event)=>{
    clearTimeout(timeoutId);
  const timeout=  setTimeout(()=>fetchRecipe(event.target.value),500);
  updateTimeoutId(timeout);  
};
  return (
    <Container>
      <MainHeader.Header>
      <MainHeader.AppNameComponent>
      <MainHeader.AppIcon src="hamburger.svg" />
      Simha's Kitchen
      </MainHeader.AppNameComponent>
       <MainHeader.SearchComponent> 
         <MainHeader.SearchIcon src='search-icon.svg'/>
         <MainHeader.SearchInput placeholder="Hello Foodies!"
          onChange={OnTextChange}/>
       </MainHeader.SearchComponent>
      </MainHeader.Header>
       <RecipeListContainer>
       {recepieList.length ? recepieList.map((recepieObj)=>(<RecepieComponent recepieObj ={recepieObj.recipe}/>)):(
         <PlaceholderDivision><Placeholder src="hamburger.svg"></Placeholder>
         <TextBelow>Start your search with Keywords like Egg,Paneer,Caroot..</TextBelow>
         </PlaceholderDivision>
         )}
       </RecipeListContainer>
    </Container>
  );
}

export default App;
