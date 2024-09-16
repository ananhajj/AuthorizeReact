 import myImage from  '../assets/img/2596052.png'
function Home(){
return(
    <>
    <div className="container	 "> 
    <h1 className='d-flex justify-content-center  mt-5'>Welcome Word</h1>
    
    <div className='d-flex justify-content-center  mt-5'>
       <img src={myImage} className="img-fluid"   />
    </div>
 
    </div>
    
    </>
)
}
export default Home