import Filter from "./Filter";

const AllCategory = () => {
    return ( <div>
       <h1>What kind of food do you like?</h1>
       {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL'].
       map (category => <Filter category={category}/>
       )}
    </div>
    )
}
export default AllCategory;