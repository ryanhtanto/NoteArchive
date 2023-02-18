import React from 'react';

 
function IsEmpty() {
        return (
                <React.Fragment>
                        <div className="alert alert-warning" role="alert" style={{marginTop : '50px'}}>
                                <h5 className='text-center'>Tidak ada aktivitas tersedia...</h5>
                                <p className='text-center'>Silahkan masukkan aktivitas</p>
                        </div>
                </React.Fragment>
                
        );
}
 
export default IsEmpty;