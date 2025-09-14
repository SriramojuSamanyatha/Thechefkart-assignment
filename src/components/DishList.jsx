import {useState} from 'react'
import EachCategory from './EachCategory'
import DishItem from './DishItem'

const TabDetails = [
    {
        "tabId":"STARTER",
        "mealType":"Starter"
    },
     {
        "tabId":"MAIN COURSE",
        "mealType":"Main Course"
    },
     {
        "tabId":"DESERT",
        "mealType":"Desert"
    },
     {
        "tabId":"SIDES",
        "mealType":"Sides"
    },
]

const DishList =({dishDetails})=> {

    const [activeCategory, setActiveCategory] = useState('MAIN COURSE')
    const [inputText,setInputText] = useState('')
    const [radioSelected,setRadioSelected] = useState('')
    const [cartItems,setCartItems] = useState([])

    const onClickTab = tab => {
        setActiveCategory(tab)
    }

    const renderDishes = () => {

        const categoryDishes = dishDetails.filter(
          eachCategory => eachCategory.mealType === activeCategory && (inputText === '' || eachCategory.name.toLowerCase().includes(inputText.toLocaleLowerCase())) && (radioSelected === '' || radioSelected === eachCategory.type)
        )

    const onClickAddQuantity = dish => {
    const isAlreadyExists = cartItems.find(item => item.categoryId === dish.categoryId)
    if (!isAlreadyExists) {
      const newDish = {...dish, quantity: 1}
      setCartItems(prevState => [...prevState, newDish])
    } else {
      setCartItems(prevState =>
        prevState.map(item =>
          item.categoryId === dish.categoryId
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      )
    }
  }

  const removeItem = dish => {
    const isAlreadyExists = cartItems.find(item => item.categoryId === dish.categoryId)
    if (isAlreadyExists) {
      setCartItems(prevState =>
        prevState
          .map(item =>
            item.categoryId === dish.categoryId
              ? {...item, quantity: item.quantity - 1}
              : item,
          )
          .filter(item => item.quantity > 0),
      )
    }
  }

  return (
      <>
      <ul className="un">
    
        {categoryDishes.map(eachDish => (
          <DishItem
            key={eachDish.id}
            dishDetails={eachDish}
            onClickAdd={onClickAddQuantity}
            onClickRemove={removeItem}
            cartItems= {cartItems}
          />
        ))}
      </ul>
      </>
    )
  }

  const renderCartItems = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const handleFilterChange = (e) => {
    const value= e.target.value 
    setRadioSelected(value)

  }

    const mealTypeCounts = dishDetails.reduce((acc,dish) => {
      acc[dish.mealType] = (acc[dish.mealType] || 0) + 1 
      return acc
    },{})

  


    return (
        <div className='p-5'>
            <div className='flex flex-row items-center border rounded text-black w-80'>
            <input type="serach" placeholder="Search dish for your party...." className='pl-4 pr-4 p-3 rounded w-70' value ={inputText} onChange={(event) => setInputText(event.target.value)}/>
            <img src="https://res.cloudinary.com/dti41e3cu/image/upload/v1757751181/fi_711319_j0no4r.png" alt="search" className='h-5 w-5' />
            </div>
        <div className='flex flex-row items-center justify-between p-5'>
          
            {TabDetails.map((eachData,index) => (
                <EachCategory 
                 key={eachData.tabId}
                tabDetails={eachData}
                onClickTab={onClickTab}
                isActive={eachData.tabId === activeCategory} 
                count ={mealTypeCounts[eachData.tabId]}
                />
            ))}
            
        </div>
        <div className='flex flex-row'>
        <label htmlFor='veg' className='flex flex-row items-center mr-3'>
         <input type="radio" name="category" id="veg" value="VEG" onChange={handleFilterChange} /><img src="https://res.cloudinary.com/dti41e3cu/image/upload/v1757738737/Frame_19479_1_wo8llg.png" alt="veg" className='h-4 w-4 m-2' /> VEG</label>
         <label htmlFor='non-veg' className='flex flex-row items-center'>
            <input type="radio" name="category" id="non-veg" value="NON VEG" onChange={handleFilterChange}/><img src="https://res.cloudinary.com/dti41e3cu/image/upload/v1757738704/Frame_19479_soq1ur.png" alt="non-veg" className='h-4 w-4 m-2' />NON VEG</label>
            </div>
        <ul className='p-5 h-180 overflow-y-scroll mb-20'>
            {renderDishes()}
        </ul>
        <div className='text-center bg-white rounded p-8 mt-30 fixed bottom-0 left-0 right-0'>
            <p>Total Dish Selected <span className='font-bold'>{renderCartItems()}</span></p>
            <button type="button" className='bg-black text-white rounded p-2 w-100 cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>Continue</button>
        </div>

        </div>
    )
  

}
export default DishList 