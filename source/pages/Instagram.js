//импортируем реакт и создаем реакт компонент с обязательным методом рендер

import React from 'react';
import { Header } from "../components/Header";
import { Content } from "../components/Content";

export class Instagram extends React.Component {
    render () {
        return (
            <>
                <Header />
                <Content />
            </>
        );
    }
}