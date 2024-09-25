import './App.css'
import { ApolloProvider } from '@apollo/client'
import EventList from './componets/EventList'
import { client } from './graphql/setup'


function App() {
  
  return (
    <ApolloProvider client={client}>
      <h1>Event List</h1>
      <EventList/>
    </ApolloProvider>
  )
}

export default App
