import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GridGroup } from "./GridGroup";

export const DockoApp = () => {
    console.log('En DockoApp');
    const [listaTratamiento, setListaTratamiento] = useState(['Goku']);

    const agregarListaTratamiento = (nuevoMedicamento) => {
        if (listaTratamiento.includes(nuevoMedicamento)) {
            return;
        }
        
        setListaTratamiento([...listaTratamiento, nuevoMedicamento]);
    };

    return (
        <>
            <h3>-* Docko *-</h3>
            <AddCategory 
                onAddTratamiento={ newMedicamento => agregarListaTratamiento(newMedicamento)}
                //onAddTratamiento={setListaTratamiento}
            />
          
            {
                listaTratamiento.map( tratamiento => 
                    <GridGroup key={tratamiento} category={tratamiento} />
                )
            }
           
        </>
    );
 };