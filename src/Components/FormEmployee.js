import React from 'react';

class FormEmployee extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: ''
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitForm = (event) => {
    event.preventDefault();
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    };
    const url = 'https://post-a-form.herokuapp.com/api/movies/'

    fetch(url, config)
    .then(response => response.json())
      .then(response => {
        if (response.error) {
          alert(response.error);
        } else {
          alert(`Movie added with ID ${response.id}!`);
        }
      }).catch(e => {
        console.error(e);
        alert("Error when adding the movie");
      });
  }

  render() {
    return(
      <div className='FormEmployee'>
        <h1>Add a movie to the database</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className='form-data'>
              <label htmlFor='title'>Movie's name</label>
              <input
                type='text'
                id='title'
                name='title'
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className='form-data'>
              <label htmlFor='poster'>Poster URL</label>
              <input
                type='text'
                id='poster'
                name='poster'
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className='form-data'>
              <label htmlFor='comment'>Comment</label>
              <input
                type='textarea'
                id='comment'
                name='comment'
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr/>
            <div className='form-data'>
              <input type='submit' value='Envoyer'></input>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default FormEmployee;