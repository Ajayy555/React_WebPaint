function Car()
{
    const brandNames=["BMW","AUDI","FORD","TESLA","TATA"];
    return (
        <>

<h1>Brand list</h1>
    {brandNames.map((car)=><Brand brand={car}/> )}
        </>
    )
}

function Brand(brand){

return(
    <>
    
<h2>
    <ul>
        <li>
       {brand}</li> </ul> </h2>

</>
)
}





export default Car