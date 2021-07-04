import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

function App() {

  const [entries, setEntries] = useState(initialEntries)
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];

      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
  }, [isOpen])
  

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map(entry => { 
      if(entry.isExpense){
        return (totalExpense += Number(entry.value));
      } else {
        return (totalIncome += Number(entry.value));
      }
    });
    setTotal(totalIncome - totalExpense);
    setIncomeTotal(totalIncome);
    setExpenseTotal(totalExpense);
  }, [entries]);


  function deleteEntry(id){
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  function editEntry(id){
    console.log(`edit entry with id ${id}`);
    if(id){
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function addEntry(){
    const result = entries.concat({
      id: entries.length + 1,
      description,
      isExpense,
      value
    });

    setEntries(result);
    resetEntry();
  }

  function resetEntry(){
    setDescription('');
    setValue('');
    setIsExpense(true);
  }
  return (
    <Container>

      <MainHeader title='Budget' />
      <DisplayBalance size="small" title="Your Balance:" value={total} />

      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />

      <MainHeader type='h3' title='History' />
      <EntryLines 
        entries={entries} 
        deleteEntry={deleteEntry} 
        editEntry={editEntry} 
      />

      <MainHeader type='h3' title='Add new transaction' />
      <NewEntryForm 
        addEntry={addEntry}
        description = {description}
        value = {value}
        isExpense = {isExpense}
        setDescription = {setDescription}
        setValue = {setValue}
        setIsExpense = {setIsExpense}
      />

      <ModalEdit 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        description = {description}
        value = {value}
        isExpense = {isExpense}
        setDescription = {setDescription}
        setValue = {setValue}
        setIsExpense = {setIsExpense} 
      />
    
    </Container>
  );
}

export default App;


var initialEntries = [
  {
    id:1,
    description: "Work Income",
    value: 10000,
    isExpense: false
  },
  {
    id:2,
    description: "Water Bill",
    value: 20,
    isExpense: true
  },
  {
    id:3,
    escription: "Electricity Bill",
    value: 200,
    isExpense: true
  },
  {
    id:4,
    description: "Salary Aa gyi",
    value: 20000,
    isExpense: false
  }
]