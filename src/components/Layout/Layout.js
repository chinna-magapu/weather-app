import React, { Component } from 'react';
import Wrap from '../../hoc/Wrap';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../assets/css/style.css';
import '../../assets/fonts/font-awesome.min.css';
import Banner from '../Banner/Banner';



class Layout extends Component {

    render() {
        return (
            <Wrap>
                <div className="site-content">
                    <Header />
                        <main className="main-content">
                            {this.props.children}
                        </main>
                    <Footer/>
                </div>
            </Wrap>
        )
    }
}

export default Layout;