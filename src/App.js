import React from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader  from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      
      <MainHeader title='Budget'/>
      <DisplayBalance size="small" title="Your Balance:" value="2550.23"/>

      <DisplayBalances/>

      <MainHeader type='h3' title='History'/>
      <EntryLine description='Oh bete' value='10' isExpense/>
      <EntryLine description='somrg' value='23123' />    
      <EntryLine description='samose' value='30' isExpense/>
      <EntryLine description='somrg' value='23123' />
    
      <MainHeader type='h3' title='Add new transaction' />
      <NewEntryForm/>
    </Container>
  );
}

export default App;
