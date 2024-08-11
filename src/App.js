import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import "./components/TicketForm";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";
import ticketReducer from "./reducers/ticketReducer";

function App() {
  const initialState = { tickets: [] };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch}></TicketForm>

        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All tickets</h2>

            <TicketList
              tickets={state.tickets}
              dispatch={dispatch}
            ></TicketList>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
