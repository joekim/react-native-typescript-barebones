import * as React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
class Root extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, { style: styles.title }, 'REACT NATIVE APP WITH TYPESCRIPT')));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3e5fec',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 20,
        paddingHorizontal: 50,
        textAlign: 'center',
    },
});
export default Root;
//# sourceMappingURL=root.js.map