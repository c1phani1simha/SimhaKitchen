import styled from 'styled-components';
//component for one recepie
 const RecipeContainer= styled.div`
 display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
`;
//component for the recepie cover photo
 const CoverImage=styled.img`
object-fit: cover;
  height: 200px;
`;
//component for the recepie name
 const RecipeName=styled.span`
font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
//component for the Ingredients text
 const SeeMoreText=styled.span`
color: #eb3300;
  font-size: 18px;
  text-align: center;
  border: solid 1px #eb3300;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
`;
//component for the SeeMore text
 const IngredientsText=styled(SeeMoreText)`
color: green;
  border: solid 1px green;
  margin-bottom: 12px;
`;
const SeeNewTab = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;

export default {RecipeContainer,CoverImage,RecipeName,IngredientsText,SeeMoreText,SeeNewTab};