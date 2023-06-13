import React from 'react';
import ClassApp from './ClassApp';
import HookApp from './HookApp';
import { Button } from 'react-bootstrap';

class App extends React.Component {
    state = {
        useHooks: false,
    };

    switch = () => {
        this.setState(prevState => ({ useHooks: !prevState.useHooks }));
    };

    render() {
        return (
            <div className="m-4">
                <Button onClick={this.switch} className="mb-3">
                    Switch to {this.state.useHooks ? 'ClassApp' : 'HookApp'}
                </Button>
                {this.state.useHooks ? <HookApp /> : <ClassApp />}
            </div>
        );
    }
}

export default App;
