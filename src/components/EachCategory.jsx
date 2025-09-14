
const EachCategory =(props) => {
    const {tabDetails,onClickTab,isActive,count} = props 
 
    const {mealType,tabId} = tabDetails 
    console.log(count)
    

    const onClickButton = () => {
        onClickTab(tabId)
    }

    return (

        <div className={`p-1 rounded cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 ${isActive ? 'bg-orange-500 text-white':'border-2 bg-white'} cursor-pointer`} onClick={onClickButton}>
            {mealType} {count}

        </div>
    )
}
export default EachCategory