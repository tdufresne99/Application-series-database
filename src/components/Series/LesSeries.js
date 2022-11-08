import { useState, useEffect } from "react";
import {Outlet, Link} from 'react-router-dom';
import {getDocs, collection, onSnapshot} from 'firebase/firestore';
import { db } from "../../config/firebase";
import UneSerie from "./UneSerie";
import './LesSeries.css'


const LesSeries = () => {

    const [series, setSeries] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, 'series'), (snapshot) => {
            const documents = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            });
            setSeries(documents);
        });
        return unsub;
    },[]);

    return (
        <div className="Series">
            {/* {console.log(series)} */}
            <div className="page-header">
                <h1 className="pacifico">Series Database</h1>
            </div>
            <section className="detailsSerie">
                <Outlet/>
            </section>
            <section>
                <ul className="listeLesSeries">
                    {series.map((serie) => {
                        // console.log(serie)
                        if(serie.id !== "--summary"){
                            return (
                                <li key={serie.id} className="list-group-item"><Link to={"/series/"+serie.id}><UneSerie serie={serie}/></Link></li>
                            );
                        };
                    })}
                </ul>
            </section>
        </div>
    );
}
  
export default LesSeries;