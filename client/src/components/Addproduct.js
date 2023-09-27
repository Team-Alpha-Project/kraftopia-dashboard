
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {Button} from "../styles/Button";

const Addproduct = () => {
  
    


  return (
    <Wrapper>

        <div className="form-container">
            <h1>Add Your Products</h1>
            <div className="add-products">
                <form action="" method="POST">
                    <div className="input-field">
                        <label htmlFor="">Product name</label>
                     <input type="text"  name="Name"  id=""  required/>
                     </div>
                      <div className="input-field">
                    <label htmlFor="">Product price</label>
                     <input type="text"  name="price"  id=""  required/>
                     </div>
                     <div className="input-field">
                    <label htmlFor="">Product price</label>
                     <input type="text"  name="price"  id=""  required/>
                     </div>
                     <div className="input-field">
                    <label htmlFor="">Product detail</label>
                    <textarea name="detail" id="" cols="30" rows="10"></textarea>
                     </div>
                     <div className="input-field">
                    <label htmlFor="">Product image</label>
                     <input type="file"  name="image"  id="" accept="image/jpg,image/jpeg,image/png,image/webp" required/>
                     </div>
                    <NavLink>
                            <Button>
                                Add product
                            </Button>
                    </NavLink>
                </form>
            </div>
        </div>
         
          <div className="show-products">
                <div className="box-container">

                    {/*  <!-- backend --> */}

                     <div className="box">
                        {/* <!-- backend --> */}
                        <img src="E:\LOCAL ARTISANS\Bidar\Hookah_base_-_Deccan_-_1700_-1750_-_Louvre_-_MAO_719.jpg" alt=""/>
                        <p>price:</p>
                        <h4>product name:</h4>
                        <details>product details</details>
                        {/* <!-- backend --> */}
                        <NavLink>
                            <Button>
                                Edit
                            </Button>
                        </NavLink>

                       
                          <Button>
                               Delete
                            </Button>

                     </div>
                     </div>
                     </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
.form-container{
    background: ;
    width: 100%;
    min-height: 100vh;
    padding: 2rem 0;
    position: relative;
   
    
}

.form-container::before{
 content: '';
    position:absolute;
    bottom: 0;
    right: 0;
    top:-5%;
    left:-10px;
    width: 255px;
    height: 650px;
    background-size: 256px;
    background-repeat: no-repeat;
    z-index: 100;

}


.form-container::after{
    content: '';
    position:absolute;
    bottom: 0;
    right: 0;
    /* top:-5%; */
    left:-10px;
    width: 255px;
    height: 220px;
    background-size: 255px;
    background-repeat: no-repeat;
    z-index: 100;

}

.form-container h1{
    /* font-size:2rem;
    padding: 2rem 15rem; */
    text-transform: uppercase;
    margin: 2rem 0;
    font-size: 2.3rem;
    text-align: center;
}

.form-container form{
    width: 60%;
    margin: 1rem auto;
    background: rgba(234, 234, 234, 0.968);
    box-shadow: var(--box-shadow);
    padding: 6rem;
    position: relative;
    border-radius: 4px;
}

.form-container form label{
    text-transform: uppercase;
    width: 100%;
    padding:1rem;
    text-size:5rem;
}


.form-container form input{
    outline:none;
    border: 1px solid #63626244;
    background: transparent;
    width: 90%;
    padding: 1rem 1.3rem;
    border-radius: 10px;
    margin: 1rem;
}
   .form-container form button{
    width: 85%;
    border: none;
    margin:20px;
    cursor:pointer;
}

.form-container form button:hover{
    background: #A9FFC;
}


.form-container form textarea{
    
    outline:none;
    border: 1px solid #63626244;
    background: transparent;
    width: 90%;
    padding: 1rem 1.3rem;
    border-radius: 10px;
    margin: 1rem;
}

//from to display products

.show-products::before{
     content: '';
    position:absolute;
    background: url('');
    top:-5%;
    left:-10px;
    width: 255px;
    height: 650px;
    background-size: 255px;
    background-repeat: no-repeat;
    z-index: 100;

}
.box-container{
    padding: 2% 8%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem,1fr));
    column-gap: 1rem;
}

.box-container .box{
    background:#fff;
    box-shadow: var(--box-shadow);
    padding: 1rem;
    text-align: center;
    border-radius:2px ;
    margin: 1rem;
}

.show-products .box-container{
    grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));

}
.box-container .box {
    line-height: 2;

}

.box-container .box h4{
    text-transform: capitalize;
}
.box-container .box img{
    width: 100%;
    margin-bottom: 1rem;
}

`;

export default Addproduct