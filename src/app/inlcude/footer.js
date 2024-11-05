import styles from './page.module.css'; 
export default function Footer() {
  return (
    <>
      <footer className="mt-4 text-center mb-2">
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 text-center mb-3'>
              <h6>Apply for Other Products</h6>

          </div>
          <div className='col-6 p-0 m-0 text-center border-bottom mt-3'>
              <div className='pb-4'>
                <img src='https://cdn-icons-png.flaticon.com/128/1570/1570998.png' width={30} />
                <div>Saving Account</div>
              </div>
          </div>
          <div className='col-6 p-0 m-0 border-start'>
              <div className='pb-4'>
                <img src='https://cdn-icons-png.flaticon.com/128/5571/5571575.png' width={30} />
                <div>Personal Loan</div>
              </div>
          </div>
          <div className='col-6 p-0 m-0 border-end'>
              <div className='pt-4'>
                <img src='https://cdn-icons-png.flaticon.com/128/2721/2721122.png' width={30} />
                <div>Fixed Deposit</div>
              </div>
          </div>
          <div className='col-6 p-0 m-0 border-top'>
              <div className='pt-4'>
                <img src='https://cdn-icons-png.flaticon.com/128/8983/8983163.png' width={30} />
                <div>Credit Card</div>
              </div>
          </div>
          <div className='col-12 mt-5 shadow-lg py-3'>

            <div className='row'>
              <div className='col-3'>
                <img src='https://cdn-icons-png.flaticon.com/128/9150/9150054.png' width={25} />
                <div>ATM Pin</div>
              </div>
              <div className='col-3'>
                <img src='https://cdn-icons-png.flaticon.com/128/535/535239.png' width={25} />
                <div>Branch</div>
              </div>
              <div className='col-3'>
                <img src='https://cdn-icons-png.flaticon.com/128/1067/1067566.png' width={25} />
                <div>Contact</div>
              </div>
              <div className='col-3'>
                <img src='https://cdn-icons-png.flaticon.com/128/471/471664.png' width={25} />
                <div>Help</div>
              </div>
            </div>

          </div>
        </div>


    </footer>
    </>
  

  );
}
