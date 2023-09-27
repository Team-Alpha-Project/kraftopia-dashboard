import React from 'react'
import styled from 'styled-components';

const Dataa = () => {
 return <Wrapper>

     <div className="dashboard">
            <div className="box-container grid-two-column">
                <div className="box">
                    <h3>/-</h3>
                    <p>Total Pendings</p>
                </div>
                <div className="box">
                    <h3>/-</h3>
                    <p>Total Completes</p>
                </div>
                <div className="box">
                    <h3>/-</h3>
                    <p>Orders Placed</p>
                </div>
                <div className="box">
                    <h3>/-</h3>
                    <p>Product Added</p>
                </div>
                <div className="box">
                    <h3>/-</h3>
                    <p>Total Normal Users</p>
                </div>
                <div className="box">
                    <h3>/-</h3>
                    <p>Total Admin</p>
                </div>
                <div className="box">
                    <h3>/-</h3>
                    <p>Total Registered Users</p>
                </div>
                <div className="box">
                    <h3>/-</h3>
                    <p>New Messages</p>
                </div>
            </div>
         </div>
 </Wrapper>;
}

const Wrapper = styled.section`
padding:9rem 0;

.dashboard{
    background:#cfcf;
    padding: 3rem;
    margin-top: -3.5rem;
    position: relative;
    display:flex;
}

 .dashboard::before{
    position: absolute;
    content:'';
    bottom: -18%;
    right: 0;
    background: '';
    width: 316px;
    height: 150px;
    background-size: 216px;
    background-repeat: no-repeat;

} 

.box-container{
    padding: 3% 8%;
    display: grid;
    grid-template-columns: repeat(4, minmax(5rem,1fr));
    column-gap: 1rem;
}

.box-container .box{
    background:#ffff;
    box-shadow: var(--box-shadow);
    padding: 3rem;
    text-align: center;
    border-radius:2px ;
    margin: 2rem;
   


}

.dashboard h3{
    text-align: center;
    font-size: 2rem;
    
}

.dashboard p{
    font-size: 20px;
    text-transform: capitalize;
    margin: .5rem 0;

}


/* to make it responsiveee */
@media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    .dashboard::after{
        display:flex;

    }

`

export default Dataa;