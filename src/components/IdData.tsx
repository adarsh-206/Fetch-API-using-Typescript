import React, { Component } from 'react'
import {useLocation, useNavigate, useParams} from 'react-router-dom'

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: Props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
             {...props}
             router={{ location, navigate, params }} />
        );
    }
    return ComponentWithRouterProp;
}

let form = {
    margin: "250px"
}

type Props = {
   router: any
}

type State = {

}



class IdData extends Component<Props, State> {

    constructor(props: Props) {
        super(props) 
        this.state = {

        }
    }

  render() {
      const { location } = this.props.router;
      console.log(location)

      const data =location.state.item.filter((item: any) => item.id === location.state.id)
      console.log(data.length)

    return (
      <div>
        <div className='container'>
           <ul className='list-group' style={form}>
              <li className='list-group-item'>{data[0].id}</li>
              <li className='list-group-item'>{data[0].name}</li>
              <li className='list-group-item'>{data[0].name_limited}</li>
              <li className='list-group-item'>{data[0].nasa_jpl_url}</li>
              <li className='list-group-item'>{data[0].designation}</li>
           </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(IdData)
