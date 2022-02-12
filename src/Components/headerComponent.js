import styled from 'styled-components';


//To style the Header component
//includes logo,name,search bar
 const Header= styled.div`
background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
//component to render logo, brandName
 const AppNameComponent= styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;
//component for logo
 const AppIcon=styled.img`
 width: 36px;
  height: 36px;
  margin: 15px;
`;
//Component to render searchBar,searchIcon
 const SearchComponent= styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
//component for searchBar
 const SearchInput= styled.input`
 color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
//component for the searchicon
 const SearchIcon= styled.img`
 width: 32px;
 height: 32px;
`;

export default 
  {Header,AppNameComponent,AppIcon,SearchComponent,SearchIcon,SearchInput}
