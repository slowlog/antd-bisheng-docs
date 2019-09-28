import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'bisheng/router';
import {FormattedMessage} from 'react-intl';
import classNames from 'classnames';
import {Select, Menu, Row, Col, Icon, Popover, Input, Button, Badge} from 'antd';
import config from '../../../bisheng.config';

export default class Header extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
        intl: PropTypes.object.isRequired,
        isMobile: PropTypes.bool.isRequired,
    };

    state = {
        menuVisible: false,
    };

    componentDidMount() {
        const {intl, router} = this.context;
        router.listen(this.handleHideMenu);
        const {searchInput} = this;
        document.addEventListener('keyup', event => {
            if (event.keyCode === 83 && event.target === document.body) {
                searchInput.focus();
            }
        });
    }


    handleHideMenu = () => {
        this.setState({
            menuVisible: false,
        });
    };


    render() {
        // const {location, themeConfig} = this.props;
        //
        // const module = location.pathname
        //     .replace(/(^\/|\/$)/g, '')
        //     .split('/')
        //     .slice(0, -1)
        //     .join('/');
        // let activeMenuItem = module || 'home';
        // if (activeMenuItem === 'components' || location.pathname === 'changelog') {
        //     activeMenuItem = 'docs/react';
        // }

        const headerClassName = classNames({
            clearfix: true,
        });

        return (
            <header id="header" className={headerClassName}>
                <Row>
                    <Col xxl={4} xl={5} lg={5} md={5} sm={24} xs={24}>
                        <Link to={config.baseConfig.homeUrl} id="logo">
                            <img alt="logo" src={config.baseConfig.logo}/>
                            <span style={{fontSize: '18px'}}>{config.baseConfig.projectName}</span>
                        </Link>
                    </Col>
                </Row>
            </header>
        );
    }
}
