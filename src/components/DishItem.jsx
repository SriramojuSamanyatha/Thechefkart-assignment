import { Link } from "react-router-dom"

const DishItem =(props)=>{
    const {dishDetails,onClickAdd,onClickRemove,cartItems} = props 
    const {description,category,name,type,categoryId} = dishDetails
    
    

    const onClickAddButton =() => {
        onClickAdd(dishDetails)
    }

    const onClickRemoveButton = () => {
        onClickRemove(dishDetails)
    }
     
    const getQuantity = () => {
        const cartItem = cartItems.find(item => item.categoryId === categoryId)
        return cartItem ? cartItem.quantity : 0
   }

    return (
        <div className="flex flex-row justify-between items-center shadow-2xl p-10 mt-2 rounded hover:translate-y-[-10px] transition-all duration-500">
            <div className="p-4">
            <div className="flex flex-row items-center">
           <h1 className="font-bold text-1xl">{name}</h1>
           <img src = {type === "VEG" ? "https://res.cloudinary.com/dti41e3cu/image/upload/v1757738737/Frame_19479_1_wo8llg.png" : "https://res.cloudinary.com/dti41e3cu/image/upload/v1757738704/Frame_19479_soq1ur.png"} className="h-5 w-5 m-2" />
           </div>
            <p className="w-full md:w-1/2">{description}</p>
            <Link to ={`/category/${categoryId}`} className="flex flex-row mt-2">
            <img src="https://res.cloudinary.com/dti41e3cu/image/upload/v1757778552/Group_1_xfkngn.png" alt="ingredient" className="h-5 w-5" />
            <p className="font-bold text-orange-500">Ingredient</p>
            </Link>
            </div>
            <div className="flex flex-col">
                <img src={category.image} alt={name} className="h-40 w-50 m-2 rounded" />
                <div className="flex flex-row items-center justify-around">
                <button type="button" className="flex flex-column items-center text-green-500 font-bold" onClick={onClickAddButton}>Add +</button>
                <p>{getQuantity()}</p>
                
               <button type="button" className="text-orange-500 font-bold" onClick={onClickRemoveButton}>Remove -</button>
            </div>
            </div>
            <div>
        </div>
        </div>
    )


}

export default DishItem