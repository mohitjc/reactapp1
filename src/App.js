import React from 'react';
import './App.css';

const url = 'https://reqres.in/api/users?page=2';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userData: [],
    };

  }

  componentDidMount() {
  fetch(url,{
  method: 'GET', 
  headers: {
  'Content-Type': 'application/json'
  }
  })
  .then(response => response.json())
  .then(data => {
    console.log("data", data)
    this.setState({ userData: data.data })});
  }

  // componentDidMount() {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => this.setState({ userData: data.data }));
  // }

  render() {
    const { userData } = this.state;
    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
          </tr>
      
        {userData && userData.map(obj =>

            <tr>
              <td>{obj.id}</td>
              <td>{obj.first_name}</td>
              <td>{obj.email}</td>
              <td><img src={obj.avatar}/></td>
            </tr>
         
        )}
        </table>
      </div>
    );
  }


}
export default App;
