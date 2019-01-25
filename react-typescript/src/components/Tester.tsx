import * as React from 'react';

export interface  IProps {
    age: number
    
}
 
export interface  IState {
    name: string
    
}
 
class Tester  extends React.Component<IProps, IState>{
    public state = { 
        age: 88,
        name: 'Red'
      }
    public render() { 
        return ( 
            <div>
                <h1>
                    The Name is {this.state.name} and He is {this.state.age}
                </h1>
            </div>
         );
    }
}
 
export default Tester ;