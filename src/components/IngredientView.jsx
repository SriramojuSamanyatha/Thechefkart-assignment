import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Details from "./Details"

const IngredientView = () => {
    const {dishId} = useParams()

    const getFilterData=  Details.filter(item => item.categoryId === parseInt(dishId))
    console.log(getFilterData)
        

 
    return (
        <>
        <div className="flex flex-row items-center shadow-2xl mb-5 p-4">
            <Link to ="/category">
            <img src ="https://res.cloudinary.com/dti41e3cu/image/upload/v1757822466/Group_852_n1dwbn.png" alt="leftarrow" className="h-4 w-4" />
            </Link>
        <h1 className="font-bold text-2xl ml-4">Ingrdient list</h1>
        </div>
       {getFilterData.map(item => (
        <div className="p-10">
        <div className="flex flex-row justify-between">
            <div>
            <h1 className="font-bold text-3xl">{item.name}</h1>
            <p className="text-2xl w-120">{item.description}</p>
            </div>
            <img src={item.category.image} alt="dish" className="h-60 w-60 shadow-2xl"/>
        </div>
        <h1 className="font-bold text-2xl">Ingredients :</h1>
        <hr className="w-full text-bold m-4" />
        <p className="text-2xl">{item.ingredients}</p>

        </div>
        ))}
    
</>

)
}
export default IngredientView
