import React, { Component, createContext } from 'react'

const Provider = createContext();

class Context extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loading: true,
        }
    }

    async componentDidMount() {
        await this.fetchLoginUser();
        this.setState({ loading: false });
    }


    login = (username, password) => {
        if(username=="user" && password == "123"){
            this.setState({ user: 1 })
        localStorage.setItem("user", "1");
            return true
        }
        else{
           return false
        }
    }

    fetchLoginUser = async () => {
        const localUser = await localStorage.getItem("user");
        if (localUser) {
            this.setState({ user: parseInt(localUser) })
        }
    }

    loguot = () => {
        this.setState({user: null});
        localStorage.removeItem("user");

        return true
    }


    render() {
        return (
            <Provider.Provider value={{
                ...this.state,
                login: this.login,
                logout: this.loguot
            }}>
                {this.props.children}
            </Provider.Provider>
        )
    }
}


export { Context, Provider }
