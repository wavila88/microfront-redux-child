import { useSelector } from "react-redux";
import { useDispatch} from "react-redux";
import { insertMicro} from './globalStore/sections/micro1Action';
import { insertGlobalInfo} from './globalStore/globalSections/micro1GlobalAction';
import { objPersona,objMicroGlobal } from './Objects/Object';
import { GlobalStore } from 'redux-micro-frontend';


function App() {
    const object = useSelector(state => state.micro1.microValue)
    const dispatch = useDispatch();
    //Global Store
    const globalStore = GlobalStore.Get(false);
    const insertReduxStore = () => {
        dispatch(insertMicro(objPersona))
    }
    const insertGlobalStore = () => {
        globalStore.DispatchAction('App1', insertGlobalInfo(objMicroGlobal))
      const global = globalStore.GetGlobalState();
        debugger;
           console.log(global.App1.micro1Global.globalValue);
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

