import React from 'react';
import ButtonSet from '../components/ButtonSet';
import PortalTable from '../components/PortalTable';
import PortalTabView from '../components/PortalTabView/PortalTabView';
import CoursesPage from './courses/CoursesPage';
import LoginPage from './login/LoginPage';



class ComponentZoo extends React.Component{

    clickme = (thebutton)=>{
        console.log(thebutton.label);

    }
    render(){
        const myprops=[
            {key:'on', label:'עובדים פעילים'},
            {key:'off', label:'עובדים לא פעילים'},
            ];

        const myarray =[{header:"פרופיל", view:(<div>פרופיל</div>)},
                        {header:"קורסים", view:(<div>קורסים</div>)},
                        {header:"עובדים", view:(<div>עובדים</div>)},
                        {header:"דיווח", view:(<div>דיווח</div>)}   
                    ]

        return <div>
           
           <PortalTabView array={myarray}/>
        </div>
    }
}
export default ComponentZoo;