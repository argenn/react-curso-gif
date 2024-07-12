import { ItemGroup } from "./ItemGroup";
import { useFecthGifs } from "./hooks/useFecthGifs";

export const GridGroup = ({category}) => {
    
    const {images, isLoading} = useFecthGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            { 
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <ItemGroup
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    );
}