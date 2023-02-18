import React from "react";

class FormSubmit extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        title: '',
                        body: '',
                }
              
                this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
                this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
                this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        }
              
        onTitleChangeEventHandler(event) {
                this.setState(() => {
                        return {
                                title: event.target.value,
                        }
                });
        }
              
        onBodyChangeEventHandler(event) {
                this.setState(() => {
                        return {
                                body: event.target.value,
                        }
                });
        }
              
        onSubmitEventHandler(event) {
                event.preventDefault();
                this.props.addActivities(this.state);
        }

        render() {
                return(
                        <React.Fragment>
                                <form onSubmit={this.onSubmitEventHandler} style={{padding: '15px', marginTop: '20px'}}>
                                        <div className="form-group">
                                                <label htmlFor="judul">Judul</label>
                                                <input type="text" className="form-control" id="judul" placeholder="Judul aktivitasmu.." value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
                                        </div>
                                        <div className="form-group" style={{marginTop: '10px'}}>
                                                <label htmlFor="deskripsi">Deskripsi</label>
                                                <textarea className="form-control" id="deskripsi" rows="3" placeholder="Ceritakan aktivitasmu.." value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
                                        </div>
                                        <button className="btn btn-primary" type="submit" style={{marginTop: '20px'}}>Tambah</button>
                                </form>
                                
                        </React.Fragment>
                )
        }
}

export default FormSubmit;