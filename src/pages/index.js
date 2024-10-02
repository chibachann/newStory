import React from "react";
import Layout from "../components/layout";

import Top from "../components/Top/Top";
import TopAndLoading from "../components/TopAndLoading/TopAndLoading";
import Feature from "../components/Feature/Feature";

import Service from "../components/Service/Service";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";

const Index = () => {
    return (
        <Layout>
            <TopAndLoading />
            <Top />
            <Feature />
            <Work />
            <Service />
            <Contact />
        </Layout>
    );
};

export default Index;
