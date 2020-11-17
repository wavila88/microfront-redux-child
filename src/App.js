import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { insertMicro} from './globalStore/sections/micro1Action';
import { insertGlobalInfo} from './globalStore/globalSections/micro1GlobalAction';
import { objPersona } from './Objects/Object';


function App() {
    const object = useSelector(state => state.micro1.microValue)
    const dispatch = useDispatch();
    const insertReduxStore = () => {
        dispatch(insertMicro(objPersona))
    }
    const insertGlobalStore = () => {
        dispatch(insertGlobalInfo(objPersona))
    }

  return (
         <div className="App">
           <h1> REDUX LOCAL OBJECT:  {JSON.stringify(object)}</h1>
           <button onClick={insertReduxStore}>Set Local Store </button>
             <button onClick={insertGlobalStore}>Set Global Store </button>

       </div>
  );
}

export default App;

